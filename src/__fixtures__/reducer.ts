import * as TodoActions from 'Features/Todo/redux/constants';
import { SET_ACTIVE_FILTER } from 'Features/VisibilityFilter/redux';
import { VisibilityFilterEnum, LoggerTypes } from 'Models/Enums';
import { Map } from 'immutable';
import { TOGGLE_LOGGER } from 'Features/Logger/redux';

const MOCKED_TODO_ID = '12345';
const mockedData = require('../../data/todos.json');
const mockedTodo = {
  done: false,
  id: '9876',
  text: 'add todo payload'
};
const addTodoNewState = Map({
  '9876': {
    ...mockedTodo
  }
});

const mockedPayloads = {
  setFilterPayload: {
    type: SET_ACTIVE_FILTER,
    payload: VisibilityFilterEnum.SHOW_DONE
  },
  getTodosPayload: {
    type: TodoActions.GET_ALL_TODOS,
    payload: Map(mockedData)
  },
  addTodoPayload: {
    type: TodoActions.ADD_TODO,
    payload: mockedTodo
  },
  updateTodoPayload: {
    type: TodoActions.UPDATE_TODO,
    payload: {
      todoId: MOCKED_TODO_ID,
      status: true
    }
  },
  deleteTodoPayload: {
    type: TodoActions.DELETE_TODO,
    payload: MOCKED_TODO_ID
  },
  toggleLoggerPayload: {
    type: TOGGLE_LOGGER,
    payload: {
      type: LoggerTypes.success,
      message: 'Api fetched',
      isVisible: true
    }
  }
};

export {
  mockedPayloads,
  mockedTodo,
  addTodoNewState,
  mockedData,
  MOCKED_TODO_ID
};
