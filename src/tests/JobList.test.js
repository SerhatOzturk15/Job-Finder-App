import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import JobList from "../components/JobList";

const setup = (props = {}) => {
  const component = shallow(<JobList {...props} />);
  return component;
};

describe("JobList component", () => {
  describe("without props", () => {
    let component = setup();
    test("component should render", () => {
      const wrapper = component.find('[data-testid="job-list"]');
      expect(wrapper.length).toBe(1);
    });
    test("JobList snapshot should match", () => {
      const wrapper = component.find('[data-testid="job-list"]');
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    test("job-item should not render", () => {
      const wrapper = component.find('[data-testid="job-item"]');
      expect(wrapper.length).toBe(0);
    });
  });

  describe("with props", () => {
    const props = {
      jobs: [
        {
          id: 1,
          title: "Frontend Developer",
          description:
            "Comfortable with modern JS stack, experience with React.",
          employment_type: "full_time",
        },
        {
          id: 2,
          title: "Backend Developer",
          description: "Comfortable with Phyton, good knowledge of databases",
          employment_type: "full_time",
        },
      ],
    };
    let component = setup(props);
    test("component should render", () => {
      const wrapper = component.find('[data-testid="job-list"]');
      expect(wrapper.length).toBe(1);
    });
    test("2 job-item should render", () => {
      const wrapper = component.find('[data-testid="job-item"]');
      expect(wrapper.length).toBe(2);
    });
  });
});
