export default class Auth {
  static getToken() {
    return localStorage.getItem('token');
  }

  static authenticateUser(token) {
    localStorage.setItem('token', token);
  }

  static deauthenticateUser() {
    localStorage.removeItem('token');
  }

  static isUserAuthenticated() {
    return localStorage.getItem('token') !== null;
  };
}
