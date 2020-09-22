import React, { useState, useEffect } from "react";
import classMap from "./services/classMap";

function TodoItem({
  todo: { id, title, completed },
  deleteTodo,
  updateTodo,
  editID,
  setEditID,
}) {
  const [editedTitle, setEditedTitle] = useState(title);

  function handleChange(e) {
    setEditedTitle(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13 && editedTitle.trim()) {
      handleUpdate();
    } else if (e.keyCode === 27) {
      handleEscape();
    }
  }

  function handleToggle() {
    updateTodo({
      id,
      title,
      completed: !completed,
    });
  }

  function handleEdit() {
    setEditID(id);
  }

  function handleUpdate() {
    updateTodo({ id, title: editedTitle.trim(), completed });
    setEditID(null);
  }

  function handleBlur() {
    handleUpdate();
  }

  function handleEscape() {
    setEditID(null);
    setEditedTitle(title);
  }

  function handleDelete() {
    deleteTodo(id);
  }

  function editing() {
    return editID === id;
  }

  useEffect(() => {
    setEditedTitle(title);
  }, [title]);

  return (
    <li
      className={classMap({
        editing: editing(),
        completed: completed,
      })}
    >
      {!editing() ? (
        <>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={completed}
              onChange={handleToggle}
            />
            <label onDoubleClick={handleEdit}>{title}</label>
            <button className="destroy" onClick={handleDelete}></button>
          </div>
        </>
      ) : (
        <>
          <input
            className="edit"
            value={editedTitle}
            onBlur={handleBlur}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </>
      )}
    </li>
  );
}

export default TodoItem;
