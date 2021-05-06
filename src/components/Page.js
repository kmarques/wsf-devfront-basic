import React, { useState } from "react";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Button from "./Lib/Button";

function Page(props) {
  const [show, setShow] = useState(true);
  return (
    <div style={{ marginTop: 50 }}>
      <hr />
      <Header theme={props.theme} />
      <hr />
      <Button title="toggle body" onClick={() => setShow(!show)} />
      {show && <Body theme={props.theme} />}
      {!show && "Body obfuscated"}
      <hr />
      <Footer theme={props.theme} />
      <hr />
    </div>
  );
}

export default Page;
