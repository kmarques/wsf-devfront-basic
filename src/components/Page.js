import React from "react";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

function Page(props) {
  return (
    <div style={{ marginTop: 50 }}>
      <hr />
      <Header theme={props.theme} />
      <hr />
      <Body theme={props.theme} />
      <hr />
      <Footer theme={props.theme} />
      <hr />
    </div>
  );
}

export default Page;
