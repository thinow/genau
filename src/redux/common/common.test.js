import { transformAnswers } from './common';
import freeze from 'deep-freeze';
import * as shuffle from 'shuffle-array';

describe('Common functions (Redux)', () => {

  describe('Transform answer', () => {
    it('Change the model', () => {
      // when
      const transformed = transformAnswers('any-category', freeze({
        right: 'RIGHT-ANSWER',
        wrong: ['WRONG-ANSWER', 'ANOTHER-WRONG-ANSWER']
      }));

      // then
      expect(transformed).toContainEqual({ value: 'RIGHT-ANSWER', correct: true });
      expect(transformed).toContainEqual({ value: 'WRONG-ANSWER' });
      expect(transformed).toContainEqual({ value: 'ANOTHER-WRONG-ANSWER' });
    });

    it('Article category, should be DER/DIE/DAS', () => {
      // when
      const transformed = transformAnswers('article', freeze({
        right: 'die',
        wrong: ['das', 'der']
      }));

      // then
      expect(transformed).toEqual([
        { value: 'der' },
        { value: 'die', correct: true },
        { value: 'das' }
      ]);
    });
  });

});