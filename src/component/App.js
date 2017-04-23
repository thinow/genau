import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { theme } from './theme/theme';
import AppBar from 'material-ui/AppBar';
import Loading from './loading/Loading';
import Menu from './menu/Menu';
import { connect } from 'react-redux';
import * as selectors from '../redux/selectors/selectors';
import * as actions from '../redux/actions/all';

// Needed for onTouchTap : http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class Presentation extends Component {

  componentDidMount() {
    this.props.loadAppRequest();
  }

  render() {
    const { loaded } = this.props;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <div>
          <AppBar title="Genau!" />
          {loaded ? <Menu /> : <Loading />}
        </div>
      </MuiThemeProvider>
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