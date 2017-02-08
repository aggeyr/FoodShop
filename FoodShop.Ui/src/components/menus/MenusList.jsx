/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import Dialog from 'material-ui/Dialog';
import AddDish from './AddDish.jsx';
import FlatButton from 'material-ui/FlatButton';

class MenusList extends Component {
  constructor() {
    super();
    this.state = {
      dialogOptions: {
        open: false,
        menu: {},
        modal: false,
        title: 'Добавить в корзину'
      }
    };
  }
  openDialog(menu) {
    let { dialogOptions } = this.state;
    dialogOptions.open = true;
    dialogOptions.menu = menu;
    this.setState({ dialogOptions });
  }
  closeDialog() {
    let { dialogOptions } = this.state;
    dialogOptions.open = false;
    this.setState({ dialogOptions });
  }
  render() {
    const { menus } = this.props;
    const { dialogOptions } = this.state;
    const sizeList = () => (<p style={{ color: '#000' }}>Список размеров</p>);
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.closeDialog.bind(this)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.closeDialog.bind(this)}
      />
    ];
    return (
      <span>
        <GridList cellHeight={300} cols={4} >
          <Subheader>Пицца</Subheader>
          {menus.map((menu, key) => (
            <GridTile
              className="dish_tile"
              titleBackground="rgba(255, 255, 255, 0.6)"
              titleStyle={{ color: '#000' }}
              key={key}
              title={menu.Description}
              subtitle={sizeList()}
              onClick={() => this.openDialog(menu)}
            >
              <img src={menu.ImageUrl} />
            </GridTile>
          ))}
        </GridList>
        <Dialog
          className="add_modal"
          {...dialogOptions}
          actions={actions}
          onRequestClose={this.closeDialog.bind(this)}
          autoScrollBodyContent
        >
          <AddDish {...dialogOptions.menu} />
        </Dialog>
      </span>
    );
  }
}

export default MenusList;