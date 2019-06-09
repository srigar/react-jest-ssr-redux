import "babel-polyfill";
import * as actions from "./index";
import * as types from "../types";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore([thunk]);

describe("<Actions />", () => {
  it("Add user action test", () => {
    const data = {
      name: "Test 2"
    };
    const fetchingAction = {
      type: types.ADD,
      data
    };
    const action = actions.addValue(data);
    expect(action).toEqual(fetchingAction);
  });

  it("Fetch users thunk", () => {
    let response = [
      {
        name: "Srigar"
      },
      {
        name: "Test User 1"
      },
      {
        name: "Test User 2"
      },
      {
        name: "Test User 3"
      }
    ];

    const expectedActions = [
      { type: types.FETCHING },
      { type: types.GET, data: response }
    ];
    
    const store = mockStore({ users: { data: [] } });
    return store.dispatch(actions.fetchUsers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
