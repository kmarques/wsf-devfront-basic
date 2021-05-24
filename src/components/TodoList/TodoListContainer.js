import React, { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";

/**
 * LifeCycle => useEffect
 *   -> Create : Création du composant
 *   -> Mount : Composant affiché dans la page
 *   -> beforeUpdate : Composant mis à jour (via les states)
 *   -> Update : Composant mis à jour (via les states)
 *   -> Unmount : Composant retiré de la page
 */
function TodoListContainer(props) {
  const [todos, setTodos] = useState([]);

  const handleAdd = (title) => {
    fetch("http://localhost:3001/products", {
      method: "POST",
      body: JSON.stringify({
        title,
        completed: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setTodos([...todos, data]));
  };

  const handleDelete = (item) => {
    fetch(`http://localhost:3001/products/${item.id}`, {
      method: "DELETE",
    }).then((_) => setTodos(todos.filter((it) => it.id !== item.id)));
  };

  const handleChange = (item, newValue) => {
    fetch(`http://localhost:3001/products/${item.id}`, {
      method: "PUT",
      body: JSON.stringify({ ...item, ...newValue }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) =>
        setTodos(todos.map((it) => (it.id !== item.id ? it : data)))
      );
  };

  useEffect(() => {
    console.log("Todos updated");
    return () => {
      console.log("Todos before Update");
    };
  }, [todos]);

  useEffect(() => {
    console.log("Todos mounted");
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => setTodos(data));
    return () => {
      console.log("Todo unmounted");
    };
  }, []);

  return (
    <>
      <List data={todos} onDelete={handleDelete} onChange={handleChange} />
      <Form theme={props.theme} onSubmit={handleAdd} />
    </>
  );
}

export default TodoListContainer;
