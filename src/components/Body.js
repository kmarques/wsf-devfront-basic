import React, { useEffect, useState } from "react";
import Button from "./Lib/Button";
import Form from "./TodoList/Form";
import List from "./TodoList/List";
import Modal from "./Lib/Modal";

/**
 * LifeCycle => useEffect
 *   -> Create : Création du composant
 *   -> Mount : Composant affiché dans la page
 *   -> beforeUpdate : Composant mis à jour (via les states)
 *   -> Update : Composant mis à jour (via les states)
 *   -> Unmount : Composant retiré de la page
 */
function Body(props) {
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(false);

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
    setTodos(todos.filter((it) => it.id !== item.id));
  };

  const handleChange = (item, newValue) => {
    setTodos(
      todos.map((it) => (it.id !== item.id ? it : { ...it, ...newValue }))
    );
  };

  useEffect(() => {
    console.log("Todos updated");
    return () => {
      console.log("Todos before Update");
    };
  }, [todos, show, props.theme]);

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
    <div>
      <h1>Products</h1>
      <List data={todos} onDelete={handleDelete} onChange={handleChange} />
      <Form theme={props.theme} onSubmit={handleAdd} />
      <Button
        title="Open modal"
        theme={props.theme}
        onClick={() => setShow(true)}
      />
      <Modal
        title="Example modal"
        description={
          <>
            Test modal
            <Button
              title="Test"
              onClick={() => alert("Test")}
              theme={props.theme}
            />
          </>
        }
        onClose={() => setShow(false)}
        show={show}
      />
    </div>
  );
}

export default Body;
