export const getPage = ({ core }) => core.page;

export const getSelectedCategory = ({ core }) => core.selectedCategory;

export const getCurrentQuestion = ({ question }) => question;

export const getCorrectAnswer = ({ question }) => question.answers.find(answer => answer.correct);

export const getNavigation = ({ navigation: items }) => ({ items, empty: items.length === 0 });

export const getError = ({ error }) => error;
