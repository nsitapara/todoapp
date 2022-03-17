import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [toDoText, setToDoText] = useState();

  function handleOnchange(event) {
    const { value } = event.target;
    setToDoText(value);
  }
  function addItem(event) {
    setToDoList((prev) => [...prev, toDoText], setToDoText(""));
  }

  function removeItem(iValue) {
    console.log(iValue);
    setToDoList((prev) => prev.filter((item, index) => index !== iValue));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleOnchange}
          value={toDoText}
          name="todotext"
          type="text"
          placeholder="To-Do Item"
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDoList.map((data, index) => (
            <ToDoItem
              id={index}
              key={index}
              data={data}
              onClickHandler={removeItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
