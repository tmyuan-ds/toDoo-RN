export const NAME = "TODO"; //folder name


//TYPE NAME
export const GET_ALL_PENDING = `${NAME}/GET_ALL_PENDING`;
export const GET_ALL_PENDING_SUCCESS = `${NAME}/GET_ALL_PENDING_SUCCESS`;
export const GET_ALL_PENDING_FAIL = `${NAME}/GET_ALL_PENDING_FAIL`;

export const getGetAllPendingData = (store) => store[NAME].getAllPending;
//create action functions
export const getAllPending = data => ({
    type: GET_ALL_PENDING,
    data: data,
})

export const getAllPendingSucess= data => ({
    type: GET_ALL_PENDING_SUCCESS,
    data: data,
})

export const getAllPendingFail= error => ({
    type: GET_ALL_PENDING_FAIL,
    error: error,
})