import {takeLatest, call ,all ,fork, put} from 'redux-saga/effects';
import Actions from "actions";
import * as api from "api";
import {store} from "store/index";

//{data} destucture the data so we can avoid a step of console.log(data.data)
function* deleteTask({data}) {

    let token = store.getState().PROFILE.userSession.data;
    const headers ={ Authorization: `Bearer ${token}`};

    const formData = new FormData();
    formData.append("id",data);
    
    const {response, error} = yield call(api.deleteTask, formData, headers);
    console.log(response, error);

    if(response && response.data.status ==="success"){
      yield put(Actions.deleteTaskSucess(response.data));
      yield put(Actions.getAll());
    }

    if(error) {
      yield put(Actions.deleteTaskFail(error.response));
    }
    
}

function* watchDeleteTask() {
  //dispatch action                   function from line 5 from saga file
    yield takeLatest(Actions.DELETE_TASK, deleteTask);
}

export default function* submit() {
  yield all([fork(watchDeleteTask)]);
}
