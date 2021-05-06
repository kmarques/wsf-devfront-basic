import React from "react";
import Button from "./Lib/Button";

function Footer(props) {
  return (
    <div>
      <div>Footer</div>
      <Button theme={props.theme} title="Footer" />
    </div>
  );
}

export default Footer;
