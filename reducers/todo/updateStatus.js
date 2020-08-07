import Actions from "../../actions";

const getDefaultState = () => ({ isLoading: false, error: null, data: {} });

function updateStatus(state, action) {
  if (typeof state === "undefined") {
    return getDefaultState();
  }

  switch (action.type) {
    case Actions.UPDATE_STATUS:
      return {
        isLoading: true,
        error: null,
        data: {}
      };

    case Actions.UPDATE_STATUS_SUCCESS:
      return {
        isLoading: false,
        error: null,
        data: action.data
      };
    case Actions.UPDATE_STATUS_FAIL:
      return {
        isLoading: false,
        error: action.error,
        data: {}
      };
    default:
      return state;
  }
}

export default updateStatus;
