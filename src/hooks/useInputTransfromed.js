import { useState } from "react";

export const useInputTransformer = (initialValue, transformer) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    setValue(transformer(e.target.value));
  };
  return {
    value,
    onChange,
  };
};

export const useSearch = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onSubmit = (e) => {
    setValue(e.target.value);
  };
  return [
    value,
    {
      onSubmit,
    },
  ];
};
