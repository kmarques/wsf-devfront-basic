import React, { useState } from "react";
import Button from "../Lib/Button";

function Form(props) {
  const { onSubmit } = props;
  const [todoTitle, setTodoTitle] = useState("");
  return (
    <div>
      <input
        type="text"
        value={todoTitle}
        onChange={(event) => setTodoTitle(event.target.value)}
      />
      <Button
        theme={props.theme}
        title="Submit"
        onClick={() => onSubmit(todoTitle)}
      />
    </div>
  );
}

export default Form;
