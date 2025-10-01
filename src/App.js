import "./App.css";

import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  let initTodo = [];
  try {
    const todosFromStorage = localStorage.getItem("todos");
    initTodo = todosFromStorage ? JSON.parse(todosFromStorage) : [];
    // if (!Array.isArray(initTodo)) initTodo = []; // safeguard
  } catch (e) {
    initTodo = [];
  }

  const [todos, setTodos] = useState(initTodo);


  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e.id !== todo.id));
  };


  const addTodo = (title, desc) => {
    const newTodo = {
      id: Date.now(), // unique id based on timestamp
      title: title,
      desc: desc,
    };
    setTodos([...todos, newTodo]);
  };


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <BrowserRouter>
        <Navbar title="TODOs LIST" searchBar={false} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <Home addTodo={addTodo} todos={todos} onDelete={onDelete} />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
