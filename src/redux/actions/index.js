import axios from "axios";
import { ADD, REMOVE, GET, FETCHING, ERROR_FETCHING } from "../types";

export const addValue = data => ({
  type: ADD,
  data
});

export const removeValue = data => ({
  type: REMOVE,
  data
});

export const fetchUsers = () => async dispatch => {
  try {
    dispatch({
      type: FETCHING
    });
    const res = await axios.get("https://tests.free.beeceptor.com/users");
    dispatch({
      type: GET,
      data: res.data
    });
  } catch (error) {
    dispatch({
      type: GET,
      data: [{
        "name": "Srigar"
      }, {
        "name": "Test User 1"
      }, {
        "name": "Test User 2"
      }, {
        "name": "Test User 3"
      }]
    });
  }
};
