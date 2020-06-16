import React from "react";
import TodoList from "../src/components/TodoList";
import TodoInput from "./components/TodoInput";

function App() {
  return (
    <section>
      <h1>Welcome to the App</h1>
      <TodoInput />
      <TodoList />
    </section>
  );
}

export default App;
