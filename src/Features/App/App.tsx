import Image from 'Components/Image';
import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader';
import styles from 'Theme/App.module.scss';
import 'Theme/App.scss';
import Todos from 'Features/Todo/views/TodosContainer';
import { List } from 'immutable';
import { Todo } from 'Models/Todo';
import { connect } from 'react-redux';
import { getAllTodos } from 'Features/Todo/redux/actionCreators';

interface Props2 {
  dispatch: any;
}
// tslint-disable-next-line
const App: React.FC<Props2> = ({ dispatch }) => {
  useEffect(() => {
    const todo: Todo = {
      id: '',
      text: 'xoxo',
      done: false,
    };

    const todos = List([todo]);
    dispatch(getAllTodos(todos));
  });

  return (
    <div className="App">
      <header className="App-header">
        <Image />
        <h1>Todo List App</h1>
        <a
          className={styles.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Todos />
    </div>
  );
};

const hotModule = hot(module)(App);

export default connect()(hotModule);
