import Image from 'Components/Image';
import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader';
import 'Theme/App.scss';
import TodosContainer from 'Features/Todo/views/TodosContainer';
import Logger from 'Features/Logger/views/LoggerContainer';
import { apiGetTodos } from 'Features/Todo/redux/actionCreators';
import { connect } from 'react-redux';

interface AppProps {
  getTodos: any;
}

const App: React.FC<AppProps> = ({ getTodos }) => {
  useEffect(() => {
    getTodos();
  });
  return (
    <div className="App">
      <header className="App-header">
        <Image />
        <h1>Todo List App</h1>
      </header>
      <TodosContainer />
      <Logger />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getTodos: () => dispatch(apiGetTodos())
});

const hotModule = hot(module)(App);

export default connect(
  null,
  mapDispatchToProps
)(hotModule);
