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
        break;
      default:
        console.log("error found");
    }
  }, []);
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState("");
  const [day, setDay] = useState("");

  //Remove Todo
  const deleteTodo = (key) => {
    console.log(toDos);
    /*  console.log(key);
    console.log(toDos);
    const allTodo = [...toDos];
    allTodo.splice(key, 1);
    setTodos(allTodo); */
    setTodos(toDos.filter((el) => el.id !== key));
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
              <div
                className={
                  toDos[index].status === true ? "completed" : "notcompleted"
                }
              >
                <input
                  onChange={(e) => {
                    console.log(e.target.checked);
                    console.log(value);
                    setTodos(
                      toDos.filter((value2) => {
                        console.log(value2);
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
                    deleteTodo(value.id);
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
