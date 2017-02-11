import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/AppActions';

import Content from '../components/layout/Content.jsx';

class App extends Component {
  render() {
    return (
      <Content {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    app: state.AppReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
