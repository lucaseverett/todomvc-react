import React, { useState } from "react";

function Header({ addTodo }) {
  const [title, setTitle] = useState("");

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13 && title.trim()) {
      addTodo({ title: title.trim(), completed: false });
      setTitle("");
    }
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        value={title}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
    </header>
  );
}

export default Header;
