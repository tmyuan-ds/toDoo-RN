import {takeLatest, call ,all ,fork, put} from 'redux-saga/effects';
import Actions from "actions";
import * as api from "api";
// import {store} from "store/index";
import {getStore} from  "../../store/configureStore";

//{data} destucture the data so we can avoid a step of console.log(data.data)
function* updateStatus({data}) {

    const formData = new FormData();
    formData.append("id",data);


    let store = getStore().getState();
    let token = Actions.getUserSession(store).data;
    const headers ={ Authorization: `Bearer ${token}`};
    
    const {response, error} = yield call(api.updateStatus, formData, headers);
    console.log(response, error);

    if(response && response.data.status === "success"){
      yield put(Actions.updateStatusSucess(response.data));
      yield put(Actions.getAll());
    }

    if(error) {
      yield put(Actions.updateStatusFail(error.response));
    }
    
    

}

function* watchUpdateStatus() {
  //dispatch action                   function from line 5 from saga file
    yield takeLatest(Actions.UPDATE_STATUS, updateStatus);
}

export default function* submit() {
  yield all([fork(watchUpdateStatus)]);
}
