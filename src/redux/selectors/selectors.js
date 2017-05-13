export const getPage = ({ core }) => core.page;

export const getSelectedCategory = ({ core }) => core.selectedCategory;

export const getCurrentQuestion = ({ question }) => question;

export const didUserGiveTheGoodAnswer = ({ question }) => question.goodAnswer;

export const getNavigation = ({ navigation: items }) => ({ items, empty: items.length === 0 });

export const getError = ({ error }) => error;
