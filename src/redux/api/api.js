import fetch from './fetch';

const REQUEST_PATTERN = /([A-Z]*):(.*)/;

const parse = (request) => {
  const domain = process.env.API_DOMAIN;
  const [, method, uri] = REQUEST_PATTERN.exec(request);

  return { method, path: `${domain}${uri}` };
};

export default (request) => {
  const { method, path } = parse(request);

  return fetch(method, path)
    .then(response => ({ response }))
    .catch(error => ({ error }));
};