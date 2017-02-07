import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/LandingPageActions';

import Order from '../components/order/Order.jsx';

class OrderContainer extends Component {
  render() {
    const {model, actions} = this.props;

    return (
      <Order model={model} actions={actions} />
    );
  }
}

function mapStateToProps(state) {
  return {
    model: {
      view: state.OrderReducer,
      app: state.AppReducer
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);