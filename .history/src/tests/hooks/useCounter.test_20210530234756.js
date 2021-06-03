import { renderHook } from "@testing-library/react-hooks";

describe("Test useCounter", () => {
  test("should return default values", () => {
    const { result } = renderHook();
  });
});
