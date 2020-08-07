export const NAME = "TODO"; //folder name


//TYPE NAME
export const UPDATE_STATUS = `${NAME}/UPDATE_STATUS`;
export const UPDATE_STATUS_SUCCESS = `${NAME}/UPDATE_STATUS_SUCCESS`;
export const UPDATE_STATUS_FAIL = `${NAME}/UPDATE_STATUS_FAIL`;

export const getUpdateStatus = (store) => store[NAME].updateStatus;

//create action functions
export const updateStatus = data => ({
    type: UPDATE_STATUS,
    data: data,
})

export const updateStatusSucess= data => ({
    type: UPDATE_STATUS_SUCCESS,
    data: data,
})

export const updateStatusFail= error => ({
    type: UPDATE_STATUS_FAIL,
    error: error,
})