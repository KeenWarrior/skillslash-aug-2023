import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditTodoModal from "./EditTodoModal";

export default function TodoList({ todos, setTodos }) {
  const toggleCompleted = function (index) {
    const copy = [...todos];
    copy[index].completed = !copy[index].completed;
    setTodos(copy);
  };

  const deleteTodo = function (index) {
    const copy = [...todos];
    copy.splice(index, 1);
    setTodos(copy);
  };

  return (
    <List
      style={{
        maxWidth: 400,
        minWidth: 300,
      }}
    >
      {todos.map(function (todo, index) {
        return (
          <ListItem>
            <Checkbox
              checked={todo.completed}
              onClick={() => toggleCompleted(index)}
            />
            <ListItemText
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              primary={todo.text}
              secondary={new Date(todo.deadline).toLocaleString()}
            />

            <EditTodoModal todos={todos} index={index} setTodos={setTodos} />
            <IconButton onClick={() => deleteTodo(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        );
      })}
    </List>
  );
}
