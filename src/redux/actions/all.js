export const APP_LOADING_REQUEST = {
  name: 'APP_LOADING_REQUEST',
  create: () => ({ type: 'APP_LOADING_REQUEST' })
};

export const APP_LOADING_SUCCESS = {
  name: 'APP_LOADING_SUCCESS',
  create: () => ({ type: 'APP_LOADING_SUCCESS' })
};

export const DISPLAY_MENU = {
  name: 'DISPLAY_MENU',
  create: () => ({ type: 'DISPLAY_MENU' })
};

export const GET_QUESTION_REQUEST = {
  name: 'GET_QUESTION_REQUEST',
  create: (category) => ({ type: 'GET_QUESTION_REQUEST', category })
};

export const GET_QUESTION_SUCCESS = {
  name: 'GET_QUESTION_SUCCESS',
  create: (question) => ({ type: 'GET_QUESTION_SUCCESS', question })
};

export const ERROR_OCCURRED = {
  name: 'ERROR_OCCURRED',
  create: () => ({ type: 'ERROR_OCCURRED' })
};

export const ERROR_HIDDEN = {
  name: 'ERROR_HIDDEN',
  create: () => ({ type: 'ERROR_HIDDEN' })
};
