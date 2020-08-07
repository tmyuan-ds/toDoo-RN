import Actions from "../../actions";

const getDefaultState = () => ({ isLoading: false, error: null, data: {} });

function createToDo(state, action) {
  if (typeof state === "undefined") {
    return getDefaultState();
  }

  switch (action.type) {
    case Actions.CREATE_TO_DO:
      return {
        isLoading: true,
        error: null,
        data: {},
      };

    case Actions.CREATE_TO_DO_SUCCESS:
      return {
        isLoading: false,
        error: null,
        data: action.data,
      };
    case Actions.CREATE_TO_DO_FAIL:
      return {
        isLoading: false,
        error: action.error,
        data: {},
      };
    default:
      return state;
  }
}

export default createToDo;