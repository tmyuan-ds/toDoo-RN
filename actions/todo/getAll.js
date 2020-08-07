export const NAME = "TODO"; //folder name


//TYPE NAME
export const GET_ALL = `${NAME}/GET_ALL`;
export const GET_ALL_SUCCESS = `${NAME}/GET_ALL_SUCCESS`;
export const GET_ALL_FAIL = `${NAME}/GET_ALL_FAIL`;

export const getGetAllData = (store) => store[NAME].getAll;
//create action functions
export const getAll = data => ({
    type: GET_ALL,
    data: data,
})

export const getAllSucess= data => ({
    type: GET_ALL_SUCCESS,
    data: data,
})

export const getAllFail= error => ({
    type: GET_ALL_FAIL,
    error: error,
})