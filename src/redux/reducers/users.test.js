import * as reducers from "./users";
import * as types from "../types";

describe("Reducers", () => {
  it("Show loader", () => {
    const action = {
      type: types.FETCHING
    };
    const state = reducers.users({}, action);
    expect(state.isFetching).toBeTruthy();
  });

  it("Get users", () => {
    const action = {
      type: types.GET,
      data: [
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
      ]
    };
    const state = reducers.users({}, action);
    expect(state.data.length).toEqual(4);
    expect(state.isFetching).toBeFalsy();
  });
});
