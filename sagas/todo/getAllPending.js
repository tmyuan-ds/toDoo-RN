import {takeLatest, call ,all ,fork, put} from 'redux-saga/effects';
import Actions from "actions";
import * as api from "api";
// import {store} from "store";

//{data} destucture the data so we can avoid a step of console.log(data.data)
function* getAllPending() {
    // console.log("getAll saga");

    let token = store.getState().PROFILE.userSession.data;
    // console.log("token is: ", token);

    const headers ={ Authorization: `Bearer ${token}`};
    
    const {response, error} = yield call(api.getAllPending, headers);
    console.log(response, error);

    if(response && response.data.status === "success"){
      yield put(Actions.getAllSucess(response.data));
    }

    if(error) {
      yield put(Actions.getAllFail(error.response));
    }
    
    

}

function* watchGetAllPending() {
  //dispatch action                   function from line 5 from saga file
    yield takeLatest(Actions.GET_ALL_PENDING, getAllPending);
}

export default function* submit() {
  yield all([fork(watchGetAllPending)]);
}
