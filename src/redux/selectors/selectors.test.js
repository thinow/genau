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

});
