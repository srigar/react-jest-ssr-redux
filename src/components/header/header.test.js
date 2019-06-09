import React from "react";
import { shallow } from "enzyme";
import Header from './header.component';

describe("<Header component />", () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<Header />);
    });
    it("Check for header container", () => {
        expect(wrapper.find('div').length).toEqual(1);
    });
    it("Check no of links", () => {
        expect(wrapper.find('Link').length).toEqual(2);
    });
    it("Check for title", () => {
        expect(wrapper.find('label').text()).toBe('SSR REDUX LAZYLOAD');
    });
});