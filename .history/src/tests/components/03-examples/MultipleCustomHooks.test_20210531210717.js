import React from "react";
import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
jest.mock("../../../hooks/useFetch");

describe("Test in MultipleCustomHooks", () => {
  test("should show component", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper).toMatchSnapshot();
  });

  test("should show information from api", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "Pedro",
          quote: "Hi",
        },
      ],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-2").text().trim()).toBe("Hi");
    expect(wrapper.find("footer").text().trim()).toBe("Pedro");

    console.log(wrapper.html());
  });
});
