import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setvalues] = useState(initialState);

  const handleInputChange = (e) => {
    e.preventDefault();
    setvalues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return [values, handleInputChange];
};
