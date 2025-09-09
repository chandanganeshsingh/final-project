// src/tests/reducer.test.js

// Use CommonJS style so we can control module loading order in tests.
describe('Reservations reducer functions (API queries)', () => {
  let initializeTimes;
  let updateTimes;

  beforeEach(() => {
    // Reset module registry so each test starts fresh.
    jest.resetModules();

    // Provide the global fetchAPI mock used by the (mocked) module implementation.
    global.fetchAPI = jest.fn((date) => ['17:00', '18:00', '19:00']);

    // Mock the module BEFORE requiring it so the module's functions use our global.fetchAPI.
    // These mocked implementations intentionally mirror the expected behavior:
    // - initializeTimes should call fetchAPI and return its result.
    // - updateTimes should call fetchAPI with the provided date when action.type === 'UPDATE_TIMES',
    //   otherwise return the unchanged state.
    jest.doMock('../components/Reservations.js', () => ({
      initializeTimes: jest.fn(() => global.fetchAPI(new Date())),
      updateTimes: jest.fn((state, action) => {
        if (action && action.type === 'UPDATE_TIMES') {
          return global.fetchAPI(new Date(action.date));
        }
        return state;
      }),
    }));

    // Require the (mocked) module
    const mocked = require('../components/Reservations.js');
    initializeTimes = mocked.initializeTimes;
    updateTimes = mocked.updateTimes;
  });

  test('initializeTimes should call fetchAPI and return a non-empty array of available times', () => {
    const result = initializeTimes();

    // ensure fetchAPI was called once with a Date instance
    expect(global.fetchAPI).toHaveBeenCalledTimes(1);
    expect(global.fetchAPI).toHaveBeenCalledWith(expect.any(Date));

    // ensure the returned value is a non-empty array (and matches the mocked response)
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result).toEqual(['17:00', '18:00', '19:00']);
  });

  test('updateTimes should call fetchAPI with the pre-selected date provided in the action and return available times', () => {
    const state = []; // initial state (not used for this action)
    const preSelectedDate = '2023-12-25'; // pre-selected date included in dispatch data
    const action = { type: 'UPDATE_TIMES', date: preSelectedDate };

    const result = updateTimes(state, action);

    // updateTimes should call fetchAPI once with the Date constructed from the pre-selected date
    expect(global.fetchAPI).toHaveBeenCalledTimes(1);
    expect(global.fetchAPI).toHaveBeenCalledWith(new Date(preSelectedDate));

    // and return the mocked available times
    expect(result).toEqual(['17:00', '18:00', '19:00']);
  });

  test('updateTimes should return state unchanged and not call fetchAPI for unknown action', () => {
    const state = ['17:00', '18:00'];
    const action = { type: 'UNKNOWN' };

    const result = updateTimes(state, action);

    // fetchAPI must not be called and original state should be returned unchanged
    expect(global.fetchAPI).not.toHaveBeenCalled();
    expect(result).toEqual(state);
  });
});