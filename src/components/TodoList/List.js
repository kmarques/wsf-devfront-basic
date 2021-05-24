import React from "react";
import ListItem from "./ListItem";
import MuiList from "@material-ui/core/List";

function List(props) {
  const { data, onDelete, onChange } = props;

  return (
    <MuiList>
      {data.map((item, index) => (
        <ListItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onChange={onChange}
        />
      ))}
    </MuiList>
  );
}

export default List;
