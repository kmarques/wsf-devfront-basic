import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import ButtonsDemo from "./screen/ButtonsDemo";
import TodoList from "./screen/TodoList";
import Todo from "./screen/Todo";
/**
 * LifeCycle => useEffect
 *   -> Create : Création du composant
 *   -> Mount : Composant affiché dans la page
 *   -> beforeUpdate : Composant mis à jour (via les states)
 *   -> Update : Composant mis à jour (via les states)
 *   -> Unmount : Composant retiré de la page
 */
function Body() {
  return (
    <Switch>
      <Route path="/products/:id">
        <Todo />
      </Route>
      <Route path="/products">
        <TodoList />
      </Route>
      <Route path="/buttons">
        <ButtonsDemo />
      </Route>
    </Switch>
  );
}

export default Body;
