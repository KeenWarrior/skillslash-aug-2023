import "./App.css";
import TodoList from "./TodoList";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const initialValue = [];
  const [todos, setTodos] = useLocalStorage("todos", initialValue);

  const addTodo = function (todo) {
    const todoText = document.getElementById("todoText").value;
    setTodos([...todos, {
      text: todoText,
      completed: false,
    }]);
  };

  return (
    <div className="App">
      <div>
        <input id="todoText" />
        <button onClick={addTodo}>Add</button>
      </div>

      <div>
          <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
