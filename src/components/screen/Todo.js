import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import TodoListContainer from "../TodoList/TodoListContainer";
import ListItem from "../TodoList/ListItem";
import { useParams } from "react-router-dom";

export default function TodoList() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/products/" + id)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  return (
    <>
      {item !== null && <ListItem item={item} />}
      {item === null && "Loading item..."}
    </>
  );
}
