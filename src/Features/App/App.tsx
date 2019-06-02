import Image from 'Components/Image';
import React from 'react';
import { hot } from 'react-hot-loader';
import 'Theme/App.scss';
import TodosContainer from 'Features/Todo/views/TodosContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Image />
        <h1>Todo List App</h1>
      </header>
      <TodosContainer />
    </div>
  );
};

const hotModule = hot(module)(App);

export default hotModule;
