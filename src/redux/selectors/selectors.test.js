import * as selectors from './selectors';

describe('Selectors', () => {

  describe('Loaded', () => {
    it('Is loaded', () => {
      // given
      const state = {
        core: { loaded: true }
      };

      // when / then
      expect(selectors.isLoaded(state)).toBeTruthy();
    });
    it('Is not loaded', () => {
      // given
      const state = {
        core: {}
      };

      // when / then
      expect(selectors.isLoaded(state)).toBeFalsy();
    });
  });

  it('Error', () => {
    // given
    const state = {
      error: { displayed: true, error: 'Error' }
    };

    // when / then
    expect(selectors.getError(state)).toEqual({ displayed: true, error: 'Error' });
  });

});
