const { v4: uuid } = require('uuid');

class Column {
  /**
   * Column Entity
   * @constructor
   * @param {Object} column - An object with Column fields
   * @param {string} column.id
   * @param {string} column.title
   * @param {number} column.order
   *
   * @property {string} id - UUID string
   * @property {string} title - Name of column
   * @property {number} order - Order of column in board
   */
  constructor({ id = uuid(), title = 'name', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }

  static toResponse(column) {
    const { id, title, order } = column;
    return { id, title, order };
  }

  static fromRequest(body) {
    return new Column(body);
  }
}

module.exports = Column;
