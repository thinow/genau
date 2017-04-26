export const APP_LOADING_REQUEST = {
  name: 'APP_LOADING_REQUEST',
  create: () => ({ type: 'APP_LOADING_REQUEST' })
};

export const APP_LOADING_SUCCESS = {
  name: 'APP_LOADING_SUCCESS',
  create: () => ({ type: 'APP_LOADING_SUCCESS' })
};

export const GET_QUESTION_REQUEST = {
  name: 'GET_QUESTION_REQUEST',
  create: (category) => ({ type: 'GET_QUESTION_REQUEST', category })
};

export const ERROR_OCCURRED = {
  name: 'ERROR_OCCURRED',
  create: () => ({ type: 'ERROR_OCCURRED' })
};

export const ERROR_HIDDEN = {
  name: 'ERROR_HIDDEN',
  create: () => ({ type: 'ERROR_HIDDEN' })
};
