import React from "react";
import MuiListItem from "@material-ui/core/ListItem";
import MuiListItemText from "@material-ui/core/ListItemText";
import MuiListItemIcon from "@material-ui/core/ListItemIcon";
import MuiListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import MuiIconButton from "@material-ui/core/IconButton";
import MuiCheckbox from "@material-ui/core/Checkbox";
import MuiDeleteIcon from "@material-ui/icons/Delete";
import MuiVisibilityIcon from "@material-ui/icons/Visibility";
import { useHistory, useRouteMatch } from "react-router";

function ListItem(props) {
  const { item, onDelete, onChange } = props;
  const history = useHistory();
  let match = useRouteMatch("/products/:id"); // match true <==> page d'un produit

  return (
    <MuiListItem
      style={{ textDecoration: item.completed ? "line-through" : "none" }}
    >
      <MuiListItemIcon>
        <MuiCheckbox
          checked={item.completed}
          disableRipple
          onChange={(_) => onChange(item, { completed: !item.completed })}
        />
      </MuiListItemIcon>
      <MuiListItemText primary={item.title} />
      <MuiListItemSecondaryAction>
        {!match && (
          <MuiIconButton
            onClick={() =>
              console.log("go to product") ||
              history.push("/products/" + item.id)
            }
          >
            <MuiVisibilityIcon />
          </MuiIconButton>
        )}
        <MuiIconButton onClick={() => onDelete(item)}>
          <MuiDeleteIcon />
        </MuiIconButton>
      </MuiListItemSecondaryAction>
    </MuiListItem>
  );
}

export default ListItem;
