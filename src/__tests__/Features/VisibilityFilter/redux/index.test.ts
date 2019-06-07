import visibilityFilter, {
  initialState,
  SET_ACTIVE_FILTER
} from 'Features/VisibilityFilter/redux';
import { VisibilityFilterEnum } from 'Models/Enums';

describe('visibilityFilter reducer', () => {
  it('should return the initialState by default', () => {
    expect(visibilityFilter(initialState, {})).toEqual({
      activeFilter: VisibilityFilterEnum.SHOW_ALL
    });
  });

  it('should set activeFilter state', () => {
    expect(
      visibilityFilter(initialState, {
        type: SET_ACTIVE_FILTER,
        payload: VisibilityFilterEnum.SHOW_DONE
      })
    ).toEqual({ activeFilter: VisibilityFilterEnum.SHOW_DONE });
  });
});
