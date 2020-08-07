import { takeLatest, call, all, fork, put } from "redux-saga/effects";
import Actions from "actions";
import * as api from "api";

// import { encode } from "../../services/encryption";

//{data} from view
function* login({ data }) {
  console.log("LOGIN SAGS");

  const formData = new FormData();
  formData.append("email" , "test2@test.com"),
  formData.append("password", "123456")

  const { response, error } = yield call(api.login, formData);
  //debug tips 
  console.log("login saga", response, error);

  return;
  yield;
}

function* watchLogin() {
  yield takeLatest(Actions.LOGIN, login);
}

export default function* submit() {
  yield all([fork(watchLogin)]);
}
