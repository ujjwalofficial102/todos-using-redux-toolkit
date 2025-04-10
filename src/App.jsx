import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <div className="text-white font-medium text-5xl">Todos</div>
      <AddTodo />
      <Todos />
    </Provider>
  );
}

export default App;
