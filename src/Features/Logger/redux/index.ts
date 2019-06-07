export const TOGGLE_LOGGER = 'TOGGLE_LOGGER';
import { LoggerState } from 'Models/Logger';

export const initialState: LoggerState = {
  type: undefined,
  message: '',
  isVisible: false
};

export const toggleLogger = (payload) => ({
  type: TOGGLE_LOGGER,
  payload
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
    default:
      return state;
  }
};
