import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Job from "../components/Job";

const setup = (props) => {
  const match = { params: { id: 1 } };
  const component = shallow(<Job {...props} />);
  return component;
};

describe("Job component", () => {
  let component = setup();
  test("component should render", () => {
    const wrapper = component.find('[data-testid="job-container"]');
    expect(wrapper.length).toBe(1);
  });

  test("Job snapshot should match", () => {
    const wrapper = component.find('[data-testid="job-container"]');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test("Job Found Image should render", () => {
    const wrapper = component.find('[data-testid="job-not-found-image"]');
    expect(wrapper.length).toBe(1);
  });
  test("Button should render", () => {
    const wrapper = component.find('[data-testid="goBackButton"]');
    expect(wrapper.length).toBe(1);
  });
  describe("Job component with props", () => {
    const props = {
      isLoading: false,
      job: {
        id: 1,
        title: "Frontend Developer",
        description: "Comfortable with modern JS stack, experience with React.",
        employment_type: "full_time",
      },
      goBackText: "Go Back",
    };
    let component = setup(props);
    test("2 job-item should render", () => {
      const wrapper = component.find('[data-testid="goBackButton"]');
      expect(wrapper.text()).toEqual("Go Back");
    });
  });
});
