import {takeLatest, call ,all ,fork, put} from 'redux-saga/effects';
import Actions from "actions";
import * as api from "api";
// import {store} from "store";

//{data} destucture the data so we can avoid a step of console.log(data.data)
function* getAllCompleted() {
    // console.log("getAll saga");

    let token = store.getState().PROFILE.userSession.data;
    // console.log("token is: ", token);

    const headers ={ Authorization: `Bearer ${token}`};
    
    const {response, error} = yield call(api.getAllCompleted, headers);
    console.log(response, error);

    if(response && response.data.status === "success"){
      yield put(Actions.getAllCompletedSucess(response.data));
    }

    if(error) {
      yield put(Actions.getAllCompletedFail(error.response));
    }
    
    

}

function* watchGetAllCompleted() {
  //dispatch action                   function from line 5 from saga file
    yield takeLatest(Actions.GET_ALL_COMPLETED, getAllCompleted);
}

export default function* submit() {
  yield all([fork(watchGetAllCompleted)]);
}
