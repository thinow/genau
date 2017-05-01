import shuffle from 'shuffle-array';

export const sortOptions = (category, options) => {
  switch (category) {
    case 'article':
      return [
        options.find(({ value }) => value === 'der'),
        options.find(({ value }) => value === 'die'),
        options.find(({ value }) => value === 'das')
      ];

    default:
      return shuffle(options, { copy: true });
  }
};