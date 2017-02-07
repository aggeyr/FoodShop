/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { Link } from 'react-router';

class Header extends Component {
  constructor() {
    super();
    injectTapEventPlugin();
  }
  render() {
    return (
      <header>
        <Toolbar className="head">
          <ToolbarGroup className="container top_menu">
            <Item to="/home">Главная</Item>
            <Item to="/menu/salads">Салаты</Item>
            <Item to="/menu/hot">Горячие блюда</Item>
            <Item to="/menu/pizza">Пицца</Item>
            <Item to="/menu/sushi">Суши</Item>
          </ToolbarGroup>
        </Toolbar>
      </header>
    );
  }
}

let Item = (props) => {
  const { children, to } = props;
  return (
      <Link className="menu_item" to={to}>{children}</Link>
  );
};

export default Header;
