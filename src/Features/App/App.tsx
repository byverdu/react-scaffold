import Image from 'Components/Image';
import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader';
import 'Theme/App.scss';
import TodosContainer from 'Features/Todo/views/TodosContainer';
import { fetchTodos } from 'Features/Todo/redux/actionCreators';
import { connect } from 'react-redux';

interface AppProps {
  fetchTodosApi: any;
}

const App: React.FC<AppProps> = ({ fetchTodosApi }) => {
  useEffect(() => {
    fetchTodosApi();
  }, []);
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

const mapDispatchToProps = (dispatch) => ({
  fetchTodosApi: () => dispatch(fetchTodos())
});

const hotModule = hot(module)(App);

export default connect(
  null,
  mapDispatchToProps
)(hotModule);
