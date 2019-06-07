import visibilityFilter, {
  initialState
} from 'Features/VisibilityFilter/redux';
import { VisibilityFilterEnum } from 'Models/Enums';
import { mockedPayloads } from '__fixtures__/reducer';

describe('visibilityFilter reducer', () => {
  it('should return the initialState by default', () => {
    expect(visibilityFilter(initialState, {})).toEqual({
      activeFilter: VisibilityFilterEnum.SHOW_ALL
    });
  });

  it('should set activeFilter state', () => {
    expect(
      visibilityFilter(initialState, mockedPayloads.setFilterPayload)
    ).toEqual({ activeFilter: VisibilityFilterEnum.SHOW_DONE });
  });
});
