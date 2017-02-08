import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/layout/Header.jsx';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <MuiThemeProvider>
        <div className="content">
          <Header />
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

export default App;
