import * as TodoActions from 'Features/Todo/redux/constants';
import { SET_ACTIVE_FILTER } from 'Features/VisibilityFilter/redux';
import { VisibilityFilterEnum, LoggerTypes } from 'Models/Enums';
import { Map } from 'immutable';
import { TOGGLE_LOGGER, TOGGLE_LOGGER_VISIBILITY } from 'Features/Logger/redux';

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

const toggleLoggerPayload = (type: LoggerTypes, message: string) => ({
  type: TOGGLE_LOGGER,
  payload: {
    type,
    message,
    isVisible: true
  }
});

const getTodosPayloadData = {
  type: TodoActions.GET_TODOS_SUCCESS,
  payload: Map(mockedData)
};
const getTodosPayload = {
  success: [
    {
      type: TodoActions.GET_TODOS_IN_PROGRESS
    },
    getTodosPayloadData,
    toggleLoggerPayload(LoggerTypes.success, 'TODOS Fetched from API')
  ],
  failure: [
    {
      type: TodoActions.GET_TODOS_IN_PROGRESS
    },
    toggleLoggerPayload(
      LoggerTypes.error,
      'The request to /todos resulted in an error: Status Code 500 (Internal Server Error)'
    ),
    {
      type: TodoActions.GET_TODOS_FAILURE,
      payload: Map(mockedData)
    }
  ]
};

const mockedPayloads = {
  setFilterPayload: {
    type: SET_ACTIVE_FILTER,
    payload: VisibilityFilterEnum.SHOW_DONE
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
  },
  resetLoggerPayload: {
    type: TOGGLE_LOGGER_VISIBILITY,
    payload: {
      type: LoggerTypes.empty,
      message: '',
      isVisible: false
    }
  }
};

export {
  getTodosPayload,
  getTodosPayloadData,
  toggleLoggerPayload,
  mockedPayloads,
  mockedTodo,
  addTodoNewState,
  mockedData,
  MOCKED_TODO_ID
};
