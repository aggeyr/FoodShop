import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/LandingPageActions';

import MenusList from '../components/menus/MenusList.jsx';

class MenusContainer extends Component {
  render() {
    const {model, actions, params} = this.props;

    return (
      <MenusList model={model} actions={actions} {...params} />
    );
  }
}

function mapStateToProps(state) {
  return {
    model: {
      view: state.MenuReducer,
      app: state.AppReducer
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenusContainer);

