import React, { useState } from "react";

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
            <li key={index}>{data}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
