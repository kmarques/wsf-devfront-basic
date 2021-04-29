import React, { useState } from "react";
import Button from "./Button";
import Form from "./Form";
import List from "./List";
import Modal from "./Modal";

function Body(props) {
  const [todos, setTodos] = useState([
    { id: 1, title: "course" },
    { id: 2, title: "sport" },
    { id: 3, title: "reunion" },
  ]);
  const [show, setShow] = useState(false);

  const handleSubmit = (title) => {
    setTodos([...todos, { id: Date.now(), title }]);
  };

  const handleDelete = (item) => {
    setTodos(todos.filter((it) => it.id !== item.id));
  };

  const handleChange = (item, newValue) => {
    setTodos(
      todos.map((it) => (it.id !== item.id ? it : { ...it, ...newValue }))
    );
  };

  return (
    <div>
      <h1>Products</h1>
      <List data={todos} onDelete={handleDelete} onChange={handleChange} />
      <Form theme={props.theme} onSubmit={handleSubmit} />
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
