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

const initialState = [
    {
      "id": 1,
      "title": "Frontend Developer",
      "description": "Comfortable with modern JS stack, experience with React.",
      "employment_type": "full_time"
    },
    {
      "id": 2,
      "title": "Backend Developer",
      "description": "Comfortable with Phyton, good knowledge of databases",
      "employment_type": "full_time"
    },
    {
      "id": 3,
      "title": "Designer",
      "description": "Comfortable with photoshop. Having creative thinking ability",
      "employment_type": "part_time"
    }
  ];

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
    const match = { params: { id: 4 } }
    const component = shallow(<Job match={match} />);
    const wrapper = component.find('[data-testid="job-not-found-image"]');
    expect(wrapper.length).toBe(1);
  });
});

