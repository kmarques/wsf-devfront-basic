import React from "react";
import Button from "./Lib/Button";

function Header(props) {
  return (
    <nav>
      <span>Website</span>
      <Button theme={props.theme} title="Header" />
    </nav>
  );
}

export default Header;
