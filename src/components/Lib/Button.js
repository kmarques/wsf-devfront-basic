import React from "react";

function Button(props) {
  const { theme, variant, title, onClick } = props;
  // <==> const theme = props.theme,
  //  variant = props.variant,
  //  title = props.title,
  //  onClick = props.onClick;

  const borderRadius = variant === "rectangle" ? 0 : 20;

  // example : modification of "this" value
  // const onClick = props?.onClick?.bind(props);

  const background = theme === "dark" ? "black" : "white";
  const color = theme === "dark" ? "white" : "black";
  return (
    <div
      style={{
        padding: 8,
        borderRadius: borderRadius,
        border: "1px solid " + color,
        backgroundColor: background,
        color: color,
      }}
      onClick={onClick}
    >
      {title}
    </div>
  );
}

export default Button;
