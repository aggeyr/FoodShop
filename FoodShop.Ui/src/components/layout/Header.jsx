import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { Link } from 'react-router';
import icon from '../../sources/img/basket.png';

class Header extends Component {
  constructor() {
    super();
    injectTapEventPlugin();
  }
  render() {
    const { total } = this.props;
    return (
      <header>
        <Toolbar className="head">
          <ToolbarGroup className="container top_menu">
            <Item to="/home">Главная</Item>
            <Item to="/menu/salads">Салаты</Item>
            <Item to="/menu/hot">Горячие блюда</Item>
            <Item to="/menu/pizza">Пицца</Item>
            <Item to="/menu/sushi">Суши</Item>
            <div className="basket">
              <Link to="/basket">
                <img src={icon} />
                <p>Total: ${total}</p>
              </Link>
            </div>
          </ToolbarGroup>
        </Toolbar>
      </header>
    );
  }
}

let Item = (props) => {
  const { children, to } = props;
  return (
    <Link to={to} className="menu_item">
      <p>{children}</p>
    </Link>
  );
};

export default Header;
