import React, { Component } from "react";
import TodoList from "../src/components/TodoList";
import TodoInput from "./components/TodoInput";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false,
  };
  handleEdit = (id) => {
    console.log("handleEdit!");
  };

  handleDelete = (id) => {
    console.log("handleDelete!");
    const filteredTodos = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      items: filteredTodos,
    });
  };

  handleChange = (e) => {
    const inputedValue = e.target.value;
    this.setState({
      item: inputedValue,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: this.state.id,
      title: this.state.item,
    };
    const updatedItems = [...this.state.items, todo];
    this.setState(
      {
        items: updatedItems,
        item: "",
        id: uuidv4(),
        editItem: false,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  clearList = () => {
    console.log("Clear list!");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4 mt-5">
            <h3 className="text-capitalize text-ceter">Todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.handleEdit}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
