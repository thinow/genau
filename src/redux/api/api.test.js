import api from './api';
import * as fetch from './fetch';

describe('API', () => {

  beforeEach(() => {
    fetch.default = jest.fn();
    process.env.API_DOMAIN = 'http://domain.test'
  });

  it('Resolve', async() => {
    // given
    fetch.default.mockReturnValue(new Promise(resolve => resolve('value')));

    // when
    const result = await api('GET:/api/path');

    // then
    expect(fetch.default).toBeCalledWith('GET', 'http://domain.test/api/path');

    expect(result).toEqual({ response: 'value' });
  });

  it('Reject', async() => {
    // given
    fetch.default.mockReturnValue(new Promise((resolve, reject) => reject('error')));

    // when
    const result = await api('GET:/api/path');

    // then
    expect(fetch.default).toBeCalledWith('GET', 'http://domain.test/api/path');

    expect(result).toEqual({ error: 'error' });
  });

  afterEach(() => {
    delete process.env.API_DOMAIN;
  });

});
