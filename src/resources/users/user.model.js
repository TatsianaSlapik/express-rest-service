const { v4: uuid } = require('uuid');

class User {
  /**
   * User Entity
   * @constructor
   * @param {Object} user - An object with User fields
   * @param {string} user.id
   * @param {string} user.name
   * @param {string} user.login
   * @param {string} user.password
   
   * @property {string} id - UUID string
   * @property {string} name - Name of user
   * @property {string} login - Login of user
   * @property {string} password - Password of user
   * 
   */
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }

  static fromRequest(body) {
    return new User(body);
  }
}

module.exports = User;
