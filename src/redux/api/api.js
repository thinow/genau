import http from 'http';

const API_DOMAIN = process.env.NODE_ENV === 'production' ? 'http://demo5395517.mockable.io' : 'http://localhost:8080';

export default (method, uri) => {
  const request = http[method.toLowerCase()];

  const promise = new Promise((resolve, reject) => {
    request({ path: `${API_DOMAIN}${uri}` }, (response) => {

      const data = [];
      response.on('data', (chunk) => data.push(chunk));
      response.on('end', () => resolve(JSON.parse(data.join(''))));
      response.on('error', (error) => reject(error));
    })
  });

  return promise
    .then(response => ({ response }))
    .catch(error => ({ error }));
};