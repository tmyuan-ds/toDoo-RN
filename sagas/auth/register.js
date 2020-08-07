import {takeLatest, call ,all ,fork, put} from 'redux-saga/effects';
import Actions from "actions";
import * as api from "api";

//{data} destucture the data so we can avoid a step of console.log(data.data)
function* register({data}) {
    console.log("register saga");
    //formData
    const formData = new FormData;
    formData.append('username', data.username);
    formData.append('email', data.email);
    formData.append('password', data.password);

    // //pass to the api
    //api.register 


    const { response, error} = yield call(api.register, formData);
    console.log( response, error );

    //if response status is success then we will update the reducer
    //first one is make sure the response is not undefined
    //second one is make sure the status is 'success'
    if (response && response.data.status === "success"){
      yield put(Actions.registerSucess(response.data));
    }
    //if error then updata fail reducer
    if (error) {
      yield put(Actions.registerFail(error));
    }

}

function* watchRegister() {
  //dispatch action                   function from line 5 from saga file
    yield takeLatest(Actions.REGISTER, register);
}

export default function* submit() {
  yield all([fork(watchRegister)]);
}
