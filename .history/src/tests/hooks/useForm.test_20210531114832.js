import { renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Test in useForm", () => {
  const initialForm = {
    name: "pedro",
    email: "pedro@gmail.com",
  };

  test("should return a form ", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { values, handleInputChange, reset } = result.current;

    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  /* test('should change form values', () => {
        
    })

    test('should reset form', () => {
        
    }) */
});
