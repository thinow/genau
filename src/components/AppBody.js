import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import AppMenuIcon from './AppMenuIcon';
import Loading from './loading/Loading';
import Menu from './menu/Menu';
import Question from './question/Question';
import ErrorBar from './errorbar/ErrorBar';
import { connect } from 'react-redux';
import * as selectors from '../redux/selectors/selectors';
import * as actions from '../redux/actions/all';

const NO_ICON = <div></div>;

const pages = [
  { name: 'loading', component: Loading },
  { name: 'menu', component: Menu },
  { name: 'question', component: Question }
];

const titles = [
  { category: 'article', text: 'Artikel von...' },
  { category: 'plural', text: 'Plural von...' },
  { category: 'simple-past', text: 'Präteritum von...' },
  { category: 'perfect', text: 'Perfekt von...' }
];

const mapProps = (state) => ({
  page: selectors.getPage(state),
  currentQuestion: selectors.getCurrentQuestion(state)
});

const mapCallbacks = (dispatch) => ({
  loadAppRequest: () => dispatch(actions.APP_LOADING_REQUEST.create())
});

export default connect(mapProps, mapCallbacks)(class extends Component {

  componentDidMount() {
    this.props.loadAppRequest();
  }

  findTitlePerQuestion = (question) => {
    return titles.find(({ category }) => category === question.category).text;
  };

  getTitle = () => {
    const { page, currentQuestion } = this.props;

    return page === 'question' ? this.findTitlePerQuestion(currentQuestion) : 'Genau!';
  };

  createPageComponent = () => {
    const { component } = pages.find(({ name }) => name === this.props.page);

    return React.createElement(component);
  };

  render() {
    return (
      <div>
        <AppBar title={this.getTitle()} iconElementLeft={NO_ICON} iconElementRight={<AppMenuIcon />} />
        {this.createPageComponent()}
        <ErrorBar />
      </div>
    );
  }
});