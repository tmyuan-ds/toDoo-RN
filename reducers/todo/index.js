import { combineReducers } from "redux";

import getAll from "./getAll";
import getAllPending from "./getAllPending";
import getAllCompleted from "./getAllCompleted";
import createToDo from "./createToDo";
import updateStatus from "./updateStatus";
import deleteTask from "./deleteTask";


export default combineReducers({
  getAll,
  getAllPending,
  getAllCompleted,
  createToDo,
  updateStatus,
  deleteTask,
});
