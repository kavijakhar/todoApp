import React from "react";
import todoContext from "./TodoContext";
import { useState } from "react";

function TodoState(props) {
  const host = "http://localhost:5000";

  // Add a todo
  const [todos, setTodos] = useState([]);

  // get all todo
  const getTodo = async () => {
    // api call
    const response = await fetch(`${host}/api/todo/fatchalltodo`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    });
    const json = await response.json();
    // console.log(json)
    setTodos(json.todo);
  };

  // add a new todo
  const addTodo = async (title, description) => {
    // api call
    const response = await fetch(`${host}/api/todo/addtodo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({
        title: title,
        description: description
      }),
    });
    const todo = await response.json();
    console.log(todo)
    // todo["id"] = todo._id
    // todo["_doc"] = todo
    setTodos(todos.concat(todo));
  };

  // delete a todo
  const deletetodo = async (id) => {
    //  api call
    const response = await fetch(`${host}/api/todo/deletetodo/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    });
    const json = await response.json();

    const newTodo = todos.filter((todo) => {
      return todo._id !== id;
    });
    // newTodo["id"] = newTodo._id
    // newTodo["_doc"] = newTodo
    setTodos(newTodo);
  };
  // edit a todo
  const edittodo = async (id, title, description) => {
    // api call
    const response = await fetch(`${host}/api/todo/updatetodo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description }),
    });
    const json = await response.json();
    console.log(json)

    let newTodo = JSON.parse(JSON.stringify(todos));
    for (let index = 0; index < newTodo.length; index++) {
      const element = newTodo[index];
      if (element._id === id) {
        newTodo[index].title = title;
        newTodo[index].description = description;
        break;
      }
    }
    setTodos(newTodo);
  };
  return (
    <div>
      <todoContext.Provider
        value={{ todos, addTodo, deletetodo, edittodo, getTodo, setTodos }}
      >
        {props.children}
      </todoContext.Provider>
    </div>
  );
}

export default TodoState;
