import React from "react";
import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";
jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe("Test in MultipleCustomHooks", () => {
  useCounter.mockReturnValue({
    counter: 1,
    increment: () => {},
  });

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
  });
});
