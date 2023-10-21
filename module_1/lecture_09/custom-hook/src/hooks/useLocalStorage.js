import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const stored = localStorage.getItem(key);

  const [value, setValue] = useState(
    stored ? JSON.parse(stored) : initialValue
  );

  const updateValue = function (value) {
    localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  };

  window.addEventListener("storage", function (event) {
    if (key == event.key) {
      setValue(JSON.parse(event.newValue));
    }
  });

  return [value, updateValue];
}

export default useLocalStorage;
