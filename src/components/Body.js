import React from "react";
import Form from "./Form";
import List from "./List";

function Body(props) {
  const products = [1, 2, 3, 4];
  return (
    <div>
      <h1>Products</h1>
      <List data={products} />
      <Form theme={props.theme} />
    </div>
  );
}

export default Body;
