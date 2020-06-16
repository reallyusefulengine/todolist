import React, { Component } from "react";
import Item from "./TodoItem";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    return (
      <div className="container">
        Hello from TodoList!
        <div className="row">
          <div className="col-sm bg-success">
            <TodoItem />
          </div>
          <div className="col-sm bg-warning">
            <TodoItem />
          </div>
          <div className="col-lg bg-info">
            <TodoItem />
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
