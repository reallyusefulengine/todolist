import React from "react";
import TodoList from "../src/components/TodoList";
import TodoInput from "./components/TodoInput";
import { v4 as uuidv4 } from "uuid";

function App() {
  const id = uuidv4();
  return (
    <section>
      <TodoInput />
      <TodoList />
      {id}
    </section>
  );
}

export default App;
