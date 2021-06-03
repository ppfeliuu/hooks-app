import { renderHook } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe("Test useCounter", () => {
  test("should return default values", () => {
    const { result } = renderHook(() => useCounter());

    console.log(result.current);

    expect(result.current.counter).toBe(1);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });
});
