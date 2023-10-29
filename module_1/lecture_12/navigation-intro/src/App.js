import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";

function App() {
  return (
    <div>
      <h1>This is header</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
