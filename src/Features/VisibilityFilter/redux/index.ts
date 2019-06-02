import { createAction } from 'redux-actions';
import { VisibilityFilterEnum } from 'Models/Enums';
import { VisibilityFilterState } from 'Models/Todo';

export const SET_ACTIVE_FILTER = 'SET_ACTIVE_FILTER';
export const setActiveFilter = createAction<VisibilityFilterEnum>(
  SET_ACTIVE_FILTER
);

export const initialState: VisibilityFilterState = {
  activeFilter: VisibilityFilterEnum.SHOW_ALL
};

const visibilityFilter = (
  state = initialState,
  action
): VisibilityFilterState => {
  switch (action.type) {
    case SET_ACTIVE_FILTER:
      return {
        activeFilter: action.payload
      };
    default:
      return state;
  }
};

export default visibilityFilter;
