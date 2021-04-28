import React from "react";
import Button from "./Button";

function Form(props) {
  return (
    <div>
      <Button theme={props.theme} title="Submit" />
    </div>
  );
}

export default Form;
