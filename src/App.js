import './App.css';
import React, { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state =
    {
      username: "sina",
      todoItems: [{ action: "do homework", done: true },
      { action: "go to trip", done: true },
      { action: "buy gift", done: false },
      { action: "make a cake", done: true },
      ],
      newItemText: ""
    }
  }

  toggleTodo = (todo) => this.setState({
    todoItems: this.state.todoItems.map
      (item => item.action === todo.action ? { ...item, done: !item.done } : item)
  });
  todoTableRows = () => this.state.todoItems.map
    (item =>
      <tr key={item.action}>
        <td> {item.action} </td>
        <td>
          <input type="checkbox" checked={item.done} onChange={() => this.toggleTodo(item)} />
        </td>
      </tr>

    )
  updateNewTextValue = (event) => {
    this.setState({ newItemText: event.target.value });
  }
  createNewTodo = () => {
    if (!this.state.todoItems.find(item => item.action === this.state.newItemText)) {
      this.setState({
        todoItems: [...this.state.todoItems,
        {
          action: this.state.newItemText,
          done: false
        }],
        newItemText: ""
      })
    }
  }

  render() {
    return (
      <div className="bg-success text-white text-center">
        <h4>
          {this.state.username} you have
          ({this.state.todoItems.filter(t => !t.done).length}) uncomplete tasks
          <div className="container-fludi">
            <div className="m-1">
              <input className="form-control"
                value={this.state.newItemText}
                onChange={this.updateNewTextValue} />
              <button className="btn btn-danger mt-1" onClick={this.createNewTodo}>
                Add new item
              </button>

              <table className="table table-success table-striped table-bordered">
                <thead>
                  <tr>
                    <th>ToDo task name</th>
                    <th>Done</th>
                  </tr>
                </thead>
                <tbody>
                  {this.todoTableRows()}
                </tbody>


              </table>


            </div>
          </div>
        </h4>
      </div>
    )
  }
}
