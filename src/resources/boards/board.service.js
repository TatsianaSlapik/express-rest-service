const Board = require('./board.model');
const boardsRepo = require('./board.memory.repository');

/**
 * Get lists of all Boards
 * @returns {Promise} List of all Boards
 */
const getAll = () => boardsRepo.getAll();

/**
 * Get board by its id
 *@param {string} boardId Id of requested board
 *@returns {Promise} Requested board instance
 */
const get = (boardId) => boardsRepo.get(boardId);

/**
 * Removed board by its id
 * @param {string} boardId Id of requested board
 * @returns {Promise} Removed board by its id
 */
const remove = (boardId) => boardsRepo.remove(boardId);

/**
 * Create a new Board in database
 * @param {Object.<Boards>} board Object with board fields
 * @returns {Promise}  New instance of Boards
 */
const save = (board) => boardsRepo.save(new Board(board));

/**
 * Updates board by its id
 * @param {string} boardId  Id of requested board
 * @param {Object.<Boards>} board Object with board fields
 * @returns {Promise} Updated board instance
 */
const update = (boardId, board) => boardsRepo.update(boardId, board);

module.exports = { getAll, get, remove, save, update };
