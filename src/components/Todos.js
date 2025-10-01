import TodoItem from "./TodoItem";

function Todos({ todos, onDelete }) {
  const titleStyle = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  };

  const listStyle = {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  };

  const listItemStyle = {
    marginBottom: "12px",
  };

  return (
    <div>
      <h3 style={titleStyle}>Todo List</h3>

      <ul style={listStyle}>
        {(todos || []).map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
