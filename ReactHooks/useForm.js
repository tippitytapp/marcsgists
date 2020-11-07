import { useState } from "react";

export const useForm = (values) => {
  const [formValues, setFormValues] = useState(values);

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };
  return [formValues, handleChange];
};
