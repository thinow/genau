import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Loading from './loading/Loading';
import Menu from './menu/Menu';
import ErrorBar from './errorbar/ErrorBar';
import { connect } from 'react-redux';
import * as selectors from '../redux/selectors/selectors';
import * as actions from '../redux/actions/all';

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
    switch (this.props.page) {
      case 'menu':
        return <Menu />;

      case 'question':
        return <div>TODO: display question...</div>;

      default:
      case 'loading':
        return <Loading />;
    }
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