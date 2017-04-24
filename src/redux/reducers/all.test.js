import createGlobalState from './all';

it('Reducers (all.js)', () => {
  // when
  const state = createGlobalState();

  // then
  expect(Object.keys(state)).toContain('core');
});
