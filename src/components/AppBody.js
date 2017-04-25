import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Loading from './loading/Loading';
import Menu from './menu/Menu';
import ErrorBar from './errorbar/ErrorBar';
import { connect } from 'react-redux';
import * as selectors from '../redux/selectors/selectors';
import * as actions from '../redux/actions/all';

class Presentation extends Component {

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
}

const mapStateToProps = (state) => {
  return {
    loaded: selectors.isLoaded(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadAppRequest: () => dispatch({ type: actions.APP_LOADING_REQUEST })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);