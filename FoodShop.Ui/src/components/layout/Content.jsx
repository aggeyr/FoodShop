/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { Link } from 'react-router';

class Content extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="container body_container">
        { children }
      </div>
    );
  }
}

export default Content;