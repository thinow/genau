import { sortOptions } from './common';
import freeze from 'deep-freeze';

describe('Common functions (Redux)', () => {

  describe('Sort options', () => {
    it('Article category, should be DER/DIE/DAS', () => {
      // when
      const sorted = sortOptions('article', freeze([
        { value: 'die', correct: true },
        { value: 'der' },
        { value: 'das' }
      ]));

      // then
      expect(sorted).toEqual([
        { value: 'der' },
        { value: 'die', correct: true },
        { value: 'das' }
      ]);
    });

    it('Other categories, shuffle options', () => {
      // given
      const options = [
        { value: 'one', correct: true },
        { value: 'two' },
        { value: 'three' }
      ];

      // when
      const sorted = sortOptions('anything else', freeze(options));

      // then
      options.forEach(option => {
        expect(sorted).toContain(option);
      });
    });
  });

});