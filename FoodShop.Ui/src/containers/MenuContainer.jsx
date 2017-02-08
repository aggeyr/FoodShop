import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/MenuActions';

import Menu from '../components/menus/Menu.jsx';

class MenusContainer extends Component {
  render() {
    const {model, actions, params} = this.props;
    return (

      <Menu model={model} actions={actions} {...params} />
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

