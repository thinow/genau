import shuffle from 'shuffle-array';

const changeModel = ({ right, wrong }) => ([
  { index: 0, value: right, correct: true },
  ...wrong.map((value, index) => ({ index: index + 1, value }))
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