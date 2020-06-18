import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <div className="container">
        My Todo List
        <div className="row">
          <div className="col-sm bg-success">
            {items.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  title={item.title}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                  clearList={clearList}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
