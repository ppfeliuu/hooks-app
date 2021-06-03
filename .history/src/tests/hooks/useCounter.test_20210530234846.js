import { renderHook } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe("Test useCounter", () => {
  test("should return default values", () => {
    const { result } = renderHook(() => useCounter());
  });
});
