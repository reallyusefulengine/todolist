import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { title } = this.props;
    return <div>{title}</div>;
  }
}

export default TodoItem;
