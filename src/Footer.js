import React from "react";
import classMap from "./services/classMap";

function Footer({ clearCompleted, activeCount, completedCount, hash }) {
  function isActive(category) {
    return hash === category;
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> {activeCount !== 1 ? "items" : "item"}{" "}
        left
      </span>
      <ul className="filters">
        <li>
          <a href="#/" className={classMap({ selected: isActive("all") })}>
            All
          </a>
        </li>
        <li>
          <a
            href="#/active"
            className={classMap({ selected: isActive("active") })}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/completed"
            className={classMap({ selected: isActive("completed") })}
          >
            Completed
          </a>
        </li>
      </ul>
      {completedCount > 0 && (
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
}

export default Footer;
