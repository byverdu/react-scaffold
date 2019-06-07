import { initialState, logger } from 'Features/Logger/redux';
import { VisibilityFilterEnum } from 'Models/Enums';
import { mockedPayloads } from '__fixtures__/reducer';

describe('logger reducer', () => {
  it('should return the initialState by default', () => {
    expect(logger(initialState, {} as any)).toEqual(initialState);
  });

  it('should set activeFilter state', () => {
    expect(logger(initialState, mockedPayloads.toggleLoggerPayload)).toEqual(
      mockedPayloads.toggleLoggerPayload.payload
    );
  });
});
