import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
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

  createMenuIcon = () => (
    <IconMenu iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}>
      <MenuItem primaryText="Menu" />
    </IconMenu>
  );

  createAppBar = () => {
    const icon = this.props.page === 'question' ? this.createMenuIcon() : NO_ICON;

    return <AppBar title="Genau!" iconElementLeft={NO_ICON} iconElementRight={icon} />;
  };

  createPageComponent = () => {
    const { component } = pages.find(({ name }) => name === this.props.page);

    return React.createElement(component);
  };

  render() {
    return (
      <div>
        {this.createAppBar()}
        {this.createPageComponent()}
        <ErrorBar />
      </div>
    );
  }
});