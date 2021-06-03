import React from "react";
import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
jest.mock("../../../hooks/useFetch");

describe("Test in MultipleCustomHooks", () => {
  test("should show component", () => {
    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper).toMatchSnapshot();
  });

  test("should show information from api", () => {});
});
