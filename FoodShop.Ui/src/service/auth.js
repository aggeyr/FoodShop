import Auth0Lock from 'auth0-lock';
// import { browserHistory } from 'react-router';

export default class AuthService {
  constructor(clientId, domain) {
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: 'http://localhost:3000/#/order',
        responseType: 'token',
        redirectAfterLogin: null
      },
      rememberLastLogin: true,
      avatar: null,
      theme: {
        logo: 'http://res.cloudinary.com/dum4mjc9q/image/upload/v1487084851/Pizza-icon_bqtwwf.png'
      },
      languageDictionary: {
        title: 'Авторизируйтесь'
      }
    });
    this.lock.on('authenticated', this._doAuthentication.bind(this));
    this.lock.on('authorization_error', this._authorizationError.bind(this));
    this.login = this.login.bind(this);
  }

  _doAuthentication(authResult) {
    this.setToken(authResult.idToken);
  }

  login() {
    this.lock.show();
  }

  loggedIn() {
    return !!this.getToken();
  }

  setToken(idToken) {
    localStorage.setItem('id_token', idToken);
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  logout() {
    localStorage.removeItem('id_token');
  }

  _authorizationError(error){
    debugger;
    // Unexpected authentication error
    console.log('Authentication Error', error);
  }
}