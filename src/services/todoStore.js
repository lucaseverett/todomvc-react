import useHash from "../hooks/useHash";
import useLocalStorage from "../hooks/useLocalStorage";

export default function store() {
  const [todos, setTodos] = useLocalStorage("todos-react", []);
  const hash = useHash();

  function nextID() {
    return (
      todos
        .map(({ id }) => id)
        .sort()
        .reverse()[0] + 1 || 1
    );
  }

  function activeCount() {
    return filter("active").length;
  }

  function totalCount() {
    return todos.length;
  }

  function completedCount() {
    return filter("completed").length;
  }

  function addTodo(todo) {
    todo.id = nextID();
    setTodos([...todos, todo]);
  }

  function updateTodo(update) {
    setTodos(todos.map((todo) => (todo.id === update.id ? update : todo)));
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function clearCompleted() {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  function toggleAll(completed) {
    setTodos(todos.map((todo) => ({ ...todo, completed })));
  }

  function filter(filter) {
    return {
      all: todos,
      active: todos.filter((todo) => !todo.completed),
      completed: todos.filter((todo) => todo.completed),
    }[filter];
  }

  return {
    todos: filter(hash),
    activeCount: activeCount(),
    completedCount: completedCount(),
    totalCount: totalCount(),
    hash,
    addTodo,
    clearCompleted,
    deleteTodo,
    updateTodo,
    toggleAll,
  };
}
