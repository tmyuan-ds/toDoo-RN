export const NAME = "TODO"; //folder name


//TYPE NAME
export const CREATE_TO_DO = `${NAME}/CREATE_TO_DO`;
export const CREATE_TO_DO_SUCCESS = `${NAME}/CREATE_TO_DO_SUCCESS`;
export const CREATE_TO_DO_FAIL = `${NAME}/CREATE_TO_DO_FAIL`;

export const getCreateData = (store) => store[NAME].createToDo;

//create action functions
export const createToDo = data => ({
    type: CREATE_TO_DO,
    data: data,
})

export const createToDoSucess= data => ({
    type: CREATE_TO_DO_SUCCESS,
    data: data,
})

export const createToDoFail= error => ({
    type: CREATE_TO_DO_FAIL,
    error: error,
})