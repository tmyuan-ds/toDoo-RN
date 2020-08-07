export const NAME = "TODO"; //folder name


//TYPE NAME
export const GET_ALL_COMPLETED = `${NAME}/GET_ALL_COMPLETED`;
export const GET_ALL_COMPLETED_SUCCESS = `${NAME}/GET_ALL_COMPLETED_SUCCESS`;
export const GET_ALL_COMPLETED_FAIL = `${NAME}/GET_ALL_COMPLETED_FAIL`;

export const getGetAllPendingData = (store) => store[NAME].getAllCompleted;
//create action functions
export const getAllCompleted = data => ({
    type: GET_ALL_COMPLETED,
    data: data,
})

export const getAllCompletedSucess= data => ({
    type: GET_ALL_COMPLETED_SUCCESS,
    data: data,
})

export const getAllCompletedFail= error => ({
    type: GET_ALL_COMPLETED_FAIL,
    error: error,
})