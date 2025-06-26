import "./List.css";
import TodoItem from "./TodoItem";

const List = () => {
  return (
    <div className="list">
      <h4>Todo List 🍎</h4>
      <input placeholder="input context to search..." />
      <div className="todos-wrapper">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default List;
