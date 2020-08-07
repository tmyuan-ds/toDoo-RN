import * as getAll from "./getAll";
import * as getAllPending from "./getAllPending";
import * as getAllCompleted from "./getAllCompleted";
import * as createToDo from "./createToDo";
import * as updateStatus from "./updateStatus";
import * as deleteTask from "./deleteTask";

export default {
  ...getAll,
  ...getAllPending,
  ...getAllCompleted,
  ...createToDo,
  ...updateStatus,
  ...deleteTask,
};
