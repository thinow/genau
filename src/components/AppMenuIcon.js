import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertical from 'material-ui/svg-icons/navigation/more-vert';
import FastRewind from 'material-ui/svg-icons/av/fast-rewind';
import BugReport from 'material-ui/svg-icons/action/bug-report';
import { palette } from './theme/theme';
import { connect } from 'react-redux';
import * as selectors from '../redux/selectors/selectors';
import * as actions from '../redux/actions/all';

const open = (link) => window.open(link, '_blank');

const mapProps = (state) => ({
  page: selectors.getPage(state)
});

const mapCallbacks = (dispatch) => ({
  displayMenu: () => dispatch(actions.DISPLAY_MENU.create())
});

export default connect(mapProps, mapCallbacks)(class extends Component {

  createMenuItems = () => {
    const { page, displayMenu } = this.props;

    switch (page) {
      case 'question':
        return [
          { text: 'Menu', icon: <FastRewind />, onClick: displayMenu },
          { text: 'Fehlermeldung', icon: <BugReport />, onClick: () => open('https://github.com/thinow/genau/issues/new') }
        ];

      default:
        return [];
    }
  };

  render() {
    const items = this.createMenuItems();

    if (items.length === 0) {
      return <div></div>;
    } else {
      return (
        <IconMenu iconButtonElement={<IconButton><MoreVertical color={palette.canvasColor} /></IconButton>}>
          {items.map(({ text, icon, onClick }) => <MenuItem key={text} primaryText={text} leftIcon={icon} onTouchTap={onClick} />)}
        </IconMenu>
      );
    }
  }
});