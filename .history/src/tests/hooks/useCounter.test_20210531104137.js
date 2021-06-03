import { renderHook } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe("Test useCounter", () => {
  test("should return default values", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(1);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });

  test("should return counter 100", () => {
    const { result } = renderHook(() => useCounter(100));

    expect(result.current.counter).toBe(100);
  });

  test("should increment in 1 ", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;
  });
});
