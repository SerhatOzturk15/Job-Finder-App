import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Job from "../components/Job";
import { mount } from 'enzyme';

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}));

const setup = () => {
  const match = { params: { id: 1 } }
  const component = shallow(<Job match={match} />);
  console.log(component.debug());
  return component;
};

describe("Job component", () => {
  let component = setup();
  it("component should render", () => {
    const wrapper = component.find('[data-testid="job-container"]');
    expect(wrapper.length).toBe(1);
  });

  it("Job snapshot should match", () => {
    const wrapper = component.find('[data-testid="job-container"]');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it ('Job Found Image should render', () => {
    const wrapper = component.find('[data-testid="job-not-found-image"]');
    expect(wrapper.length).toBe(1);
  });
});

