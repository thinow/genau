import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertical from 'material-ui/svg-icons/navigation/more-vert';
import { palette } from './theme/theme'
import { connect } from 'react-redux';
import * as selectors from '../redux/selectors/selectors';
import * as actions from '../redux/actions/all';

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
          { text: 'Menu', onClick: displayMenu }
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
          {items.map(({ text, onClick }) => <MenuItem key={text} primaryText={text} onTouchTap={onClick} />)}
        </IconMenu>
      );
    }
  }
});