import { convertDataIntoJSON } from './fetch';

describe('API / Fetch', () => {

  describe('Convert data into JSON', () => {
    it('Correct value', () => {
      // given
      const resolve = jest.fn();
      const reject = jest.fn();

      // when
      const dataAsChunks = ['{', '"field"', ':', '"value"', '}'];
      convertDataIntoJSON(dataAsChunks, resolve, reject);

      // then
      expect(resolve).toBeCalledWith({ field: 'value' });
    });

    it('Unexpected value', () => {
      // given
      const resolve = jest.fn();
      const reject = jest.fn();

      // when
      const dataAsChunks = ['<html>Error</html>'];
      convertDataIntoJSON(dataAsChunks, resolve, reject);

      // then
      expect(reject).toBeCalled();
    });
  });

});
