const { v4: uuid } = require('uuid');

class Board {
  /**
   * Board Entity
   * @constructor
   * @param {Object} board - An object with Board fields
   * @param {string} board.id
   * @param {string} board.title
   * @param {Column[] | null} board.columns
   *
   * @property {string} id - UUID string
   * @property {string} title - Name of board
   * @property {Array<Column> | null} columns - Array of board columns
   */

  constructor({ id = uuid(), title = 'name', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }

  static fromRequest(body) {
    return new Board(body);
  }
}

module.exports = Board;
