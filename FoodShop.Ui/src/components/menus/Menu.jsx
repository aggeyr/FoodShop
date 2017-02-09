import React, { Component } from 'react';

import Filter from './Filter.jsx';
import MenusList from './MenusList.jsx';

class Menu extends Component {
  componentWillMount() {
    const { category, actions: { getMenus } } = this.props;
    getMenus(category);
  }
  render() {
    const { view, app: { selectedMeals } } = this.props.model;
    const { selectMeal } = this.props.actions;
    return (
      <div>
        <Filter />
        <MenusList {...view} selectedMeals={selectedMeals} selectMeal={selectMeal} />
      </div>
    );
  }
}

export default Menu;