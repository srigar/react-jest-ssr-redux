import { ADD, REMOVE, GET, FETCHING, ERROR_FETCHING } from "../types";

export const users = (state = { data: [], isFetching: false }, action) => {
  switch (action.type) {
    case GET:
      return Object.assign({}, { data: action.data, isFetching: false });
    case ADD:
      return Object.assign({}, { data: [...state.data, action.data], isFetching: false });;
    case REMOVE:
      return Object.assign(
        {},
        {
          ...state,
          data: [
            ...state.data.slice(0, action.data),
            ...state.data.slice(action.data + 1)
          ]
        }
      );
    case FETCHING:
      return Object.assign({}, { ...state, isFetching: true });
    case ERROR_FETCHING:
      return Object.assign({}, { ...state, isFetching: false });
    default:
      return state;
  }
};
