import React, { useState } from "react";
import TodoItem from "./TodoItem";

function Main({
  todos,
  deleteTodo,
  updateTodo,
  completedCount,
  totalCount,
  toggleAll,
}) {
  const [editID, setEditID] = useState(null);
  function isChecked() {
    return totalCount > 0 && completedCount === totalCount;
  }

  function handleToggleAll() {
    toggleAll(isChecked() ? false : true);
  }

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={completedCount === totalCount}
        onChange={handleToggleAll}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...{ todo, deleteTodo, updateTodo, editID, setEditID }}
          />
        ))}
      </ul>
    </section>
  );
}

export default Main;
