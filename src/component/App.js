import React, { Component } from 'react';
import Loading from './loading/Loading';
import Menu from './menu/Menu';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/all';

class Presentation extends Component {
  render() {
    const { loaded, loadApp } = this.props;

    return (
      <div>
        <h1>Wiederhol!</h1>
        <button onClick={loadApp}>Test action</button>
        {loaded ? <Menu /> : <Loading />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loaded: state.commons.loaded
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadApp: () => dispatch({ type: actions.APP_LOADING_SUCCESS })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);