import deepFreeze from 'deep-freeze';

const freeze = (object) => object ? deepFreeze(object) : undefined;

export const reduce = (previousState, action) => {
  return {
    byUsing: (reducer) => ({
      expectedNextState: (expected) => {
        const nextState = reducer(freeze(previousState), freeze(action));
        expect(nextState).toEqual(expected);
      }
    })
  };
};