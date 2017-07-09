import React, { Component } from 'react';
import Header from './header';
import AddTodo from '../containers/add-todo';
import TodoList from '../containers/todo-list';

export default class App extends Component {
  render() {
    return (
      <div>
      	<Header />
      	<AddTodo />
      	<TodoList />
      </div>
    );
  }
}
