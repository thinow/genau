import * as selectors from './selectors';

describe('Selectors', () => {

  describe('Pge', () => {
    it('Is loading', () => {
      // given
      const state = {
        core: { page: 'PAGE' }
      };

      // when / then
      expect(selectors.getPage(state)).toEqual('PAGE');
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
