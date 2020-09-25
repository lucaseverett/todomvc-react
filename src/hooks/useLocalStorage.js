import { useState, useEffect } from "react";

export default function storage(key, initialValue) {
  const [todos, setTodos] = useState(getFromStorage);

  function getFromStorage() {
    return JSON.parse(localStorage.getItem(key)) || initialValue;
  }

  function saveToStorage(value) {
    setTodos(value);
    localStorage.setItem(key, JSON.stringify(value));
  }

  function updateFromStorage() {
    setTodos(getFromStorage());
  }

  useEffect(() => {
    window.addEventListener("storage", updateFromStorage);
    return () => {
      window.removeEventListener("storage", updateFromStorage);
    };
  }, []);

  return [todos, saveToStorage];
}
