import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Loading from './loading/Loading';
import Menu from './menu/Menu';
import ErrorBar from './errorbar/ErrorBar';
import { connect } from 'react-redux';
import * as selectors from '../redux/selectors/selectors';
import * as actions from '../redux/actions/all';

const mapProps = (state) => ({
  loaded: selectors.isLoaded(state)
});

const mapCallbacks = (dispatch) => ({
  loadAppRequest: () => dispatch(actions.APP_LOADING_REQUEST.create())
});

export default connect(mapProps, mapCallbacks)(class extends Component {

  componentDidMount() {
    this.props.loadAppRequest();
  }

  render() {
    const { loaded } = this.props;

    return (
      <div>
        <AppBar title="Genau!" />
        {loaded ? <Menu /> : <Loading />}
        <ErrorBar />
      </div>
    );
  }
});