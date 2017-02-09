import React, {Component} from 'react';
import { connect } from 'react-redux';

import Content from '../components/layout/Content.jsx';

class App extends Component {
  render() {
    return (
      <Content {...this.props}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    app: state.AppReducer
  };
}

export default connect(mapStateToProps)(App);
