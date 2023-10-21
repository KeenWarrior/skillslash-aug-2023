import { Button, TextField } from "@mui/material";
import "./App.css";
import TodoList from "./TodoList";
import useLocalStorage from "./hooks/useLocalStorage";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const initialValue = [];
  const [todos, setTodos] = useLocalStorage("todos", initialValue);
  const [todoText, setTodoText] = useState("");
  const [deadline, setDeadline] = useState(new Date());

  const addTodo = function (todo) {
    setTodos([
      ...todos,
      {
        text: todoText,
        completed: false,
        deadline: deadline.toISOString(),
      },
    ]);
    setTodoText("");
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          gap: 20,
        }}
      >
        <TextField
          id="todoText"
          label="Todo"
          variant="outlined"
          value={todoText}
          onChange={(event) => {
            setTodoText(event.target.value);
          }}
        />
        <ReactDatePicker
          selected={deadline}
          onChange={(date) => setDeadline(date)}
        />
        <Button onClick={addTodo} variant="contained">
          Add Todo
        </Button>
      </div>

      <div>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
