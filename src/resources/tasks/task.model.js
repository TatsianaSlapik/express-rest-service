const { v4: uuid } = require('uuid');

class Task {
  /**
   * Task Entity
   * @constructor
   * @param {Object} task - An object with Task fields
   * @param {string} task.id
   * @param {string} task.title
   * @param {number} task.order
   * @param {string} task.description
   * @param {string} task.userId
   * @param {string} task.boardId
   * @param {string} task.columnId
   *
   * @property {string} id - UUID string
   * @property {string} title - Name of board
   * @property {number} task.order - Order of task in column
   * @property {string} task.description - Task description
   * @property {string} task.userId - Id of assigned user
   * @property {string} task.boardId - Id of board
   * @property {string} task.columnId - Id of column
   */
  constructor({
    id = uuid(),
    title = 'name',
    order = 0,
    description = '',
    userId = '',
    boardId = '',
    columnId = '',
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task) {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }

  static fromRequest(body) {
    return new Task(body);
  }
}

module.exports = Task;
