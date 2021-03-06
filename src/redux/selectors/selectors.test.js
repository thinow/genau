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

  it('Selected category', () => {
    // given
    const state = {
      core: { selectedCategory: 'CATEGORY' }
    };

    // when / then
    expect(selectors.getSelectedCategory(state)).toEqual('CATEGORY');
  });

  it('Question', () => {
    // given
    const state = {
      question: { label: 'QUESTION' }
    };

    // when / then
    expect(selectors.getCurrentQuestion(state)).toEqual({ label: 'QUESTION' });
  });

  describe('Navigation', () => {
    it('Empty', () => {
      // given
      const state = {
        navigation: []
      };

      // when / then
      expect(selectors.getNavigation(state)).toEqual({ empty: true, items: [] });
    });

    it('Contains some items', () => {
      // given
      const state = {
        navigation: ['anything']
      };

      // when / then
      expect(selectors.getNavigation(state)).toEqual({ empty: false, items: ['anything'] });
    });
  });

  describe('Answer', () => {
    it('Get correct answer', () => {
      // given
      const state = {
        question: {
          answers: [
            { value: 'one' },
            { value: 'two', correct: true },
            { value: 'three' }
          ]
        }
      };

      // when / then
      expect(selectors.getCorrectAnswer(state)).toEqual({ value: 'two', correct: true });
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
