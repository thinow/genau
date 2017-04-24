import http from 'http';

export const convertDataIntoJSON = (data, resolve, reject) => {
  try {
    resolve(JSON.parse(data.join('')));
  } catch (error) {
    reject(error);
  }
};

export default (method, path) => {
  return new Promise((resolve, reject) => {
    const request = http[method];

    request({ path }, (response) => {

      const data = [];
      response.on('data', (chunk) => data.push(chunk));
      response.on('end', () => convertDataIntoJSON(data, resolve, reject));
      response.on('error', (error) => reject(error));
    });
  });
};