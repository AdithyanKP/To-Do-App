import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
function App() {
  useEffect(() => {
    let today = new Date();
    let day = today.getDay();
    console.log(day);
    switch (day) {
      case 0:
        setDay("Sunday");
        break;
      case 1:
        setDay("Monday");
        break;
      case 2:
        setDay("Tuesday");
        break;
      case 3:
        setDay("Wednesday");
        break;
      case 4:
        setDay("Thursday");
        break;
      case 5:
        setDay("Friday");
        break;
      case 6:
        setDay("Saturday");
    }
  }, []);
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState("");
  const [day, setDay] = useState("");
  const deleteTodo = (key) => {
    console.log(key);
    console.log(toDos);
    const allTodo = [...toDos];
    allTodo.splice(key, 1);
    setTodos(allTodo);
  };
  const addTodo = () => {
    setTodos([...toDos, { id: Date.now(), text: toDo, status: false }]);
    resetField();
  };
  const resetField = () => {
    setTodo("");
  };
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>To Do list </h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day}🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={() => addTodo()} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((value, index) => {
          return (
            <div className="todo">
              <div className="left">
                <input
                  onChange={(e) => {
                    console.log(e.target.checked);
                    console.log(value);
                    setTodos(
                      toDos.filter((value2) => {
                        if (value2.id === value.id) {
                          value2.status = e.target.checked;
                        }
                        return value2;
                      })
                    );
                  }}
                  value={value.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{value.text}</p>
              </div>
              <div className="right">
                <i
                  key={index}
                  onClick={() => {
                    deleteTodo(index);
                  }}
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
