import http from 'http';

export default (method, path) => {
  const request = http[method.toLowerCase()];

  const promise = new Promise((resolve, reject) => {
    request({ path }, (response) => {

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