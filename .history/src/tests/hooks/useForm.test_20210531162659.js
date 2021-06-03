import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Test in useForm", () => {
  const initialForm = {
    email: "pedro@gmail.com",
    name: "pedro",
  };

  test("should return a form", () => {
    const { result } = renderHook(() => useForm(initialForm));

    const [formValues, handleInputChange, reset] = result.current;

    console.log(formValues);

    expect(formValues).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("should change form values", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { handleInputChange } = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Pepe",
        },
      });
    });

    const [formValues] = result.current;
    console.log(formValues);
  });

  /*  test('should reset form', () => {
        
    }) */
});
