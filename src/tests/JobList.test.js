import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import JobList from "../components/JobList";

const setup = (props = {}) => {
  const component = shallow(<JobList />);
  return component;
};

describe("JobList component", () => {
  let component = setup();
  it("component should render", () => {
    const wrapper = component.find('[data-testid="job-list"]');
    expect(wrapper.length).toBe(1);
  });

  it("JobList snapshot should match", () => {
    const wrapper = component.find('[data-testid="job-list"]');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
