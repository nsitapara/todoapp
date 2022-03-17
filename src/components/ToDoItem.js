import React, { useState } from "react";

export default function ToDoItem(props) {
  return (
    <>
      <li
        onClick={() => props.onClickHandler(props.id)}
        id={props.id}
        key={props.index}
      >
        {props.data}
      </li>
    </>
  );
}
