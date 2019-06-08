import { LoggerState } from 'Models/Logger';
import { LoggerTypes } from 'Models/Enums';
export const TOGGLE_LOGGER = 'TOGGLE_LOGGER';
export const TOGGLE_LOGGER_VISIBILITY = 'TOGGLE_LOGGER_VISIBILITY';

export const initialState: LoggerState = {
  type: undefined,
  message: '',
  isVisible: false
};

export const toggleLogger = (payload) => ({
  type: TOGGLE_LOGGER,
  payload
});

export const toggleLoggerVisibility = () => ({
  type: TOGGLE_LOGGER_VISIBILITY,
  payload: {
    type: LoggerTypes.empty,
    message: '',
    isVisible: false
  }
});

export const logger = (
  state: LoggerState = initialState,
  { type, payload }
): LoggerState => {
  switch (type) {
    case TOGGLE_LOGGER:
      return {
        ...payload
      };
    case TOGGLE_LOGGER_VISIBILITY:
      return {
        ...payload
      };
    default:
      return state;
  }
};
