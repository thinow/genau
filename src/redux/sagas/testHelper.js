export const createTestableIterator = (generator) => {
  const iterator = {};

  iterator.__next = () => {
    return generator.next(iterator.previousReturn).value;
  };

  iterator.next = ({ equals, returns }) => {
    expect(iterator.__next()).toEqual(equals);
    iterator.previousReturn = returns;
  };

  iterator.hasNoMoreElements = () => {
    expect(iterator.__next()).toBeUndefined();
  };

  return iterator;
};