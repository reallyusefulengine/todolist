import React from "react";
import TodoList from "../src/components/TodoList";
import TodoInput from "./components/TodoInput";

function App() {
  return (
    <section>
      <TodoInput />
      <TodoList />
    </section>
  );
}

export default App;
