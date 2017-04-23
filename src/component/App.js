import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { theme } from './theme/theme';
import AppBar from './appbar/AppBar';
import Loading from './loading/Loading';
import Menu from './menu/Menu';
import { connect } from 'react-redux';
import * as selectors from '../redux/selectors/selectors';
import * as actions from '../redux/actions/all';

// Needed for onTouchTap : http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const style = {
  container: { display: 'flex', height: '100vh', flexDirection: 'column' },
  bar: { flex: '0 0 10vh' },
  content: { flex: '1' }
};

class Presentation extends Component {

  componentDidMount() {
    this.props.loadAppRequest();
  }

  render() {
    const { loaded } = this.props;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <div style={style.container}>
          <AppBar style={style.bar} />
          {loaded ? <Menu style={style.content} /> : <Loading style={style.content} />}
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