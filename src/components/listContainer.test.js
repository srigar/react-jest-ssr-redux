import "babel-polyfill";
import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk';

import ListContainer from "./listContainer";

describe("<ListContainer />", () => {
  let wrapper;
  beforeAll(() => {
    const props = {
      onSelect: jest.fn
    }
    const mockState = {
      remove: jest.fn,
      fetchUsers: jest.fn,
      users: {
        isFetching: false,
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
      }
    };
    const mockstore = configureStore([thunk]);
    const store = mockstore(mockState);
    wrapper = mount(<Provider store={store}><ListContainer {...props} /></Provider>);
  });

  it("Check for parent container", () => {
    expect(wrapper.find("div.childContainer").length).toEqual(1);
  });

  it("Check for header", () => {
    expect(wrapper.find("h3").length).toEqual(1);
  });

  it("Check for list items", () => {
    expect(wrapper.find('div.userList').length).toEqual(4);
  });
});
