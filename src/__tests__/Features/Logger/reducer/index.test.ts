import { initialState, logger } from 'Features/Logger/redux';
import { mockedPayloads } from '__fixtures__/reducer';

describe('logger reducer', () => {
  it('should return the initialState by default', () => {
    expect(logger(initialState, {} as any)).toEqual(initialState);
  });

  it('should set a new logger state', () => {
    expect(logger(initialState, mockedPayloads.toggleLoggerPayload)).toEqual(
      mockedPayloads.toggleLoggerPayload.payload
    );
  });

  it('should reset the logger state', () => {
    expect(logger(initialState, mockedPayloads.resetLoggerPayload)).toEqual(
      mockedPayloads.resetLoggerPayload.payload
    );
  });
});
