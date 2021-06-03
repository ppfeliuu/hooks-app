import { shallow } from "enzyme";
import React from "react";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";

describe("Test in MultipleCustomHooks", () => {
  test("should show component", () => {
    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper).toMatchSnapshot();
  });
});
