import React from "react";

function List(props) {
  const { data, onDelete, onChange } = props;

  return (
    <ul>
      {data.map((item, index) => (
        <li key={item.id} style={{ textDecoration: item.completed ? "line-through" : "none" }}>
          {item.title}
          <button onClick={() => onDelete(item)}>Supprimer</button>
          <button
            onClick={() => onChange(item, { completed: !item.completed })}
          >
            {item.completed ? "X" : "O"}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default List;
