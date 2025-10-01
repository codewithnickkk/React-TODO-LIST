import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  let [title, setTitle] = useState("");
  let [desc, setDesc] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Title cannot be blank");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className="container my-3">
      <h3>Add a ToDo</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddTodo;
