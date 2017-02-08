import React, { Component } from 'react';

import Filter from './Filter.jsx';
import MenusList from './MenusList.jsx';

class Menu extends Component {
  componentWillMount() {
    const { category, actions: { getMenus } } = this.props;
    getMenus(category);
  }
  render() {
    const { view } = this.props.model;
    return (
      <div>
        <Filter />
        <MenusList {...view} />
      </div>
    );
  }
}

export default Menu;