export const NAME = "TODO"; //folder name


//TYPE NAME
export const DELETE_TASK = `${NAME}/DELETE_TASK`;
export const DELETE_TASK_SUCCESS = `${NAME}/DELETE_TASK_SUCCESS`;
export const DELETE_TASK_FAIL = `${NAME}/DELETE_TASK_FAIL`;

export const getDeleteTaskData = (store) => store[NAME].deleteTask;

//delete action functions
export const deleteTask = data => ({
    type: DELETE_TASK,
    data: data,
})

export const deleteTaskSucess= data => ({
    type: DELETE_TASK_SUCCESS,
    data: data,
})

export const deleteTaskFail= error => ({
    type: DELETE_TASK_FAIL,
    error: error,
})