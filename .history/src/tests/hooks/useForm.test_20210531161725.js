import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Test in useForm", () => {
  const initialForm = {
    name: "pedro",
    email: "pedro@gmail.com",
  };

  test("should return a form", () => {
    const { result } = renderHook(() => useForm(initialForm));

    const { values, handleInputChange, reset } = result.current;

    console.log(result.current);

    //expect(values).toEqual(initialForm);
    /* expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function"); */
  });

  /* test("should change form values", () => {
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
  }); */

  /*  test('should reset form', () => {
        
    }) */
});
