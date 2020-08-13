import {takeLatest, call ,all ,fork, put} from 'redux-saga/effects';
import Actions from "actions";
import * as api from "api";
// import {store} from "store";
import {getStore} from "../../store/configureStore";

//{data} destucture the data so we can avoid a step of console.log(data.data)
function* getAll() {
    // console.log("getAll saga");
    let store = getStore().getState();
    let token = Actions.getUserSession(store).data;
    const headers ={ Authorization: `Bearer ${token}`};
    
    const {response, error} = yield call(api.getAll, headers);
    console.log(response, error);

    if(response && response.data.status === "success"){
      yield put(Actions.getAllSucess(response.data));
    }

    if(error) {
      yield put(Actions.getAllFail(error.response));
    }
    
    

}

function* watchGetAll() {
  //dispatch action                   function from line 5 from saga file
    yield takeLatest(Actions.GET_ALL, getAll);
}

export default function* submit() {
  yield all([fork(watchGetAll)]);
}
