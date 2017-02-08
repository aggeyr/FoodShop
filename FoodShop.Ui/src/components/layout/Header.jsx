/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { Link } from 'react-router';
import icon from '../../sources/img/basket.png';
import history from '../../store/History';

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
            <Basket />
          </ToolbarGroup>
        </Toolbar>
      </header>
    );
  }
}

let Basket = () => {
  return (
    <div className="basket">
      <Link to="/basket">
        <img src={icon} />
        <p>Total: $42</p>
      </Link>
    </div>
  );
};

let Item = (props) => {
  const { children, to } = props;
  return (
    <Link to={to} className="menu_item">
      <p>{children}</p>
    </Link>
  );
};

export default Header;
