import React from "react";

function TodoItem({ todo, onDelete }) {
  const todoItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 16px",
    margin: "10px 0",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 2px 6px rgba(0,0,0,0.08)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  };

  const textStyle = {
    maxWidth: "75%",
  };

  const titleStyle = {
    margin: 0,
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "#333",
  };

  const descStyle = {
    margin: "4px 0 0",
    fontSize: "0.95rem",
    color: "#666",
  };

  const buttonStyle = {
    background: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "6px 12px",
    fontSize: "0.9rem",
    fontWeight: 500,
    cursor: "pointer",
    transition: "background 0.2s ease, transform 0.1s ease",
  };

  return (
    <div
      style={todoItemStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "0px 2px 6px rgba(0,0,0,0.08)";
      }}
    >
      <div style={textStyle}>
        <h5 style={titleStyle}>{todo.title}</h5>
        <p style={descStyle}>{todo.desc}</p>
      </div>
      <button
        style={buttonStyle}
        onMouseEnter={(e) => (e.target.style.background = "#c82333")}
        onMouseLeave={(e) => (e.target.style.background = "#dc3545")}
        onClick={() => onDelete(todo)}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
