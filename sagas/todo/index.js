import { all, fork } from "redux-saga/effects";
import getAll from "./getAll";
import getAllPending from "./getAllPending";
import getAllCompleted from "./getAllCompleted";
import createToDo from "./createToDo";
import updateStatus from "./updateStatus";
import deleteTask from "./deleteTask";


export default function* home() {
  yield all([
    fork(getAll), 
    fork(getAllPending), 
    fork(getAllCompleted), 
    fork(createToDo),
    fork(updateStatus),
    fork(deleteTask),
  ]);
}
