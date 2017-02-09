/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header.jsx';
import * as utils from '../../utils/utils';

class Content extends Component {
  render() {
    const { children, app : { selectedMeals } } = this.props;
    const total = utils.calculateTotal(selectedMeals);
    return (
      <MuiThemeProvider>
        <div className="content">
          <Header total={total} />
          <div className="container body_container">
            {children}
          </div>
          <footer>
            <p>&copy; { new Date().getFullYear() } Anna Osetskaya</p>
          </footer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Content;