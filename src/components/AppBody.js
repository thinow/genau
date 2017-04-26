import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Loading from './loading/Loading';
import Menu from './menu/Menu';
import Question from './question/Question';
import ErrorBar from './errorbar/ErrorBar';
import { connect } from 'react-redux';
import * as selectors from '../redux/selectors/selectors';
import * as actions from '../redux/actions/all';

const pages = [
  { name: 'loading', component: Loading },
  { name: 'menu', component: Menu },
  { name: 'question', component: Question }
];

const mapProps = (state) => ({
  page: selectors.getPage(state)
});

const mapCallbacks = (dispatch) => ({
  loadAppRequest: () => dispatch(actions.APP_LOADING_REQUEST.create())
});

export default connect(mapProps, mapCallbacks)(class extends Component {

  componentDidMount() {
    this.props.loadAppRequest();
  }

  createPageComponent = () => {
    const { component } = pages.find(({ name }) => name === this.props.page);

    return React.createElement(component);
  };

  render() {
    return (
      <div>
        <AppBar title="Genau!" />
        {this.createPageComponent()}
        <ErrorBar />
      </div>
    );
  }
});