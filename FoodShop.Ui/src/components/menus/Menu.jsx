import React, { Component } from 'react';

import Filter from './Filter.jsx';
import MenusList from './MenusList.jsx';

class Menu extends Component {
  componentWillMount() {
    const { category, actions: { getGoods } } = this.props;
    getGoods(category, true);
  }
  componentWillReceiveProps(props) {
    const { category, actions: { getGoods } } = this.props;
    const newCategory = props.category;
    if (category !== newCategory) {
      getGoods(newCategory, true);
    }
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