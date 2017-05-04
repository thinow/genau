import shuffle from 'shuffle-array';

const changeModel = ({ right, wrong }) => ([
  { value: right, correct: true },
  ...wrong.map(value => ({ value }))
]);

export const transformAnswers = (category, answers) => {
  const array = changeModel(answers);

  switch (category) {
    case 'article':
      return [
        array.find(({ value }) => value === 'der'),
        array.find(({ value }) => value === 'die'),
        array.find(({ value }) => value === 'das')
      ];

    default:
      return shuffle(array);
  }
};