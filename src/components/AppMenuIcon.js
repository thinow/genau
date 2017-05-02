import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertical from 'material-ui/svg-icons/navigation/more-vert';
import { palette } from './theme/theme';
import { connect } from 'react-redux';
import * as selectors from '../redux/selectors/selectors';
import * as actions from '../redux/actions/all';

const HOME_WEBSITE = 'https://github.com/thinow/genau/blob/master/README.md#genau';

const mapProps = (state) => ({
  navigation: selectors.getNavigation(state)
});

const mapCallbacks = (dispatch) => ({
  displayMenu: () => dispatch(actions.DISPLAY_MENU.create())
});

export default connect(mapProps, mapCallbacks)(class extends Component {

  open = (link) => window.open(link, '_blank');

  createMenuItemComponent = (item) => {
    switch (item) {

      case 'menu':
        return <MenuItem key={item} primaryText="Menü" onTouchTap={this.props.displayMenu} />;

      case 'about':
        return <MenuItem key={item} primaryText="Apropos" onTouchTap={() => this.open(HOME_WEBSITE)} />;

      default:
        throw `Unknown navigation item. value = ${item}`;
    }
  };

  render() {
    const { empty, items } = this.props.navigation;

    if (empty) {
      return <div></div>;
    } else {
      return (
        <IconMenu iconButtonElement={<IconButton><MoreVertical color={palette.canvasColor} /></IconButton>}>
          {items.map(this.createMenuItemComponent)}
        </IconMenu>
      );
    }
  }
});