import React from "react";
import { render } from "react-dom";

import "./styles.css";

const Todo = props => (
  <li>
    <input type="checkbox" />
    <button>delete</button>
    <span>{props.text}</span>
  </li>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }
  addTodo() {
    const text = prompt.apply("add a todo");
    this.setState({ todos: [this.state.todo, { text: text }] });
  }
  render() {
    return (
      <div>
        <button onClick={() => this.addTodo}>add todo</button>
        <ul>
          {this.state.todos.map(todo => (
            <Todo todo={todo} />
          ))}
        </ul>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));