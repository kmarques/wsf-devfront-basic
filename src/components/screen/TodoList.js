import React from "react";
import { Typography } from "@material-ui/core";
import TodoListContainer from "../TodoList/TodoListContainer";

export default function TodoList() {
  return (
    <>
      <Typography variant="h5" component="h1">
        Products
      </Typography>
      <TodoListContainer />
    </>
  );
}
