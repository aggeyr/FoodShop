import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/LandingPageActions';

import Basket from '../components/basket/Basket.jsx';

class BasketContainer extends Component {
  render() {
    const {model, actions} = this.props;

    return (
      <Basket model={model} actions={actions} />
    );
  }
}

function mapStateToProps(state) {
  return {
    model: {
      view: state.BasketReducer,
      app: state.AppReducer
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketContainer);