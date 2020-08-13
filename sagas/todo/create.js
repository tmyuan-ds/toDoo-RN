import {takeLatest, call ,all ,fork, put} from 'redux-saga/effects';
import Actions from "actions";
import * as api from "api";
import {getStore} from "../../store/configureStore";

//{data} destucture the data so we can avoid a step of console.log(data.data)
function* createToDo({data}) {
    console.log("createToDo saga");


    const formData = new FormData();
    //db column name  //container form name
    // formData.append("id",data.id);
    // console.log(data.id);
    let store = getStore().getState();
        let token = Actions.activateUserSession(store).data;
        console.log("token is: ", token);
        const headers ={ Authorization: `Bearer ${token}`};
        
    formData.append("task_title", data.title);
    formData.append("task_details", data.details);


    
    const {response, error} = yield call(api.createToDo, formData, headers);
    console.log(response, error);

    
    if(response && response.data.status === "success") {
      yield put(Actions.createToDoSucess(response.data));
      yield put(Actions.getAll());
    }

    if(error) {
      yield put(Actions.createToDoFail(error.response));
    }
    
}

function* watchCreateToDo() {
  //dispatch action                   function from line 5 from saga file
    yield takeLatest(Actions.CREATE_TO_DO, createToDo);
}

export default function* submit() {
  yield all([fork(watchCreateToDo)]);
}
