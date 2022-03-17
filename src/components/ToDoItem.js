import React, { useState } from "react";

export default function ToDoItem(props) {
  const [strike, setStrike] = useState(false);
  // const [style, setStyle] = useState({
  //   textDecoration: "none",
  // });

  // function onClickHandler() {
  //   setStyle({
  //     textDecoration: "line-through",
  //   });
  // }

  return (
    <>
      <li
        onClick={() => setStrike((prev) => !prev)}
        style={{ textDecoration: strike ? "line-through" : "none" }}
        key={props.index}
      >
        {props.data}
      </li>
    </>
  );
}
