import logo from "./logo.svg";
import "./App.css";
import db from "./utils/db";
import { useLiveQuery } from "dexie-react-hooks";

function App() {
  const tasks = useLiveQuery(() => db.tasks.toArray(), []);

  return (
    <div className="App">
      <form>
        <input id="title" type="text" placeholder="Title" />
        <input id="description" type="text" placeholder="Description" />
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
            db.tasks.add({ title, description });
          }}
        >
          Add
        </button>
      </form>

      <h1>Tasks</h1>
      {tasks &&
        tasks.map((task) => (
          <div key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <hr />
          </div>
        ))}
    </div>
  );
}

export default App;
