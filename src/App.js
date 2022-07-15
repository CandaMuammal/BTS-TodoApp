import React, { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./Main/addTodo";
import Todo from "./Main/todo";

const App = () => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("http://94.74.86.174:8080/api/checklist")
      .then((res) => res.json())
      .then((data) => setTodo(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (name) => {
    await fetch("http://94.74.86.174:8080/api/checklist", {
      method: "POST",
      body: JSON.stringify({
        name: name,
      }),
      Authorization: "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W119.i2OVQdxr08dmIqwP7cWOJk5Ye4fySFUqofl-w6FKbm4EwXTStfm0u-sGhDvDVUqNG8Cc7STtUJlawVAP057Jlg",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setTodo((todo) => [...todo, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await fetch(`http://94.74.86.174:8080/api/checklist/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setTodo(
            todo.filter((todo) => {
              return todo.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(todo);
  return (
    <div className="App">

      <br />
      <AddTodo onAdd={onAdd} />
      <div>
        {todo.map((todo) => (
          <Todo
            id={todo.id}
            key={todo.id}
            name={todo.name}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default App;