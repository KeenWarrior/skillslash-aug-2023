import { Button, Checkbox, IconButton, Modal, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";

function EditTodoModal({ todos, setTodos, index }) {
  const todo = todos[index];
  const [open, setOpen] = useState(false);
  const [todoText, setTodoText] = useState(todo.text);
  const [deadline, setDeadline] = useState(new Date(todo.deadline));
  const [completed, setCompleted] = useState(todo.completed);

  const updateTodo = function () {
    const copy = [...todos];
    copy[index] = {
      text: todoText,
      completed: completed,
      deadline: deadline.toISOString(),
    };
    setTodos(copy);
    setOpen(false);
  };

  console.log(todoText, deadline, completed);

  const handleOpen = function () {
    setOpen(true);
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <EditIcon />
      </IconButton>
      <Modal
        open={open}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          border: "2px solid #000",
          backgroundColor: "white",
          boxShadow: 24,
          p: 4,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            gap: 20,
            flexWrap: "wrap",
            padding: 20,
            backgroundColor: "white",
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

          <Checkbox
            checked={completed}
            onClick={() => setCompleted(!completed)}
          />

          <Button variant="contained" onClick={updateTodo}>
            Update Todo
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default EditTodoModal;
