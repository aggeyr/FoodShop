import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/layout/Header';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <MuiThemeProvider>
        <div className="body">
          <Header />
          {children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
