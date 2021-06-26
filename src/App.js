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
          {this.state.username}'s ToDo list
          ({this.state.todoItems.filter(t=> !t.done).length}) items to do
          <div className="container-fludi">
            <div className="m-1">
              <input className="form-control"
                value={this.state.newItemText}
                onChange={this.updateNewTextValue} />
              <button className="btn btn-danger mt-1" onClick={this.createNewTodo}>
                Add new item
              </button>
            </div>
          </div>
        </h4>
      </div>
    )
  }
}
