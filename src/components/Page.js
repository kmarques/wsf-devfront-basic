import React, { useState } from "react";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Button from "./Lib/Button";
import MuiContainer from "@material-ui/core/Container";

function Page(props) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Header theme={props.theme} />
      <MuiContainer>
        <Button title="toggle body" onClick={() => setShow(!show)} />
        {show && <Body theme={props.theme} />}
        {!show && "Body obfuscated"}
      </MuiContainer>
      <Footer theme={props.theme} />
      <hr />
    </div>
  );
}

export default Page;
