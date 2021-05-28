const myDB = require('../../utils/myDataBase');

const TABLE_NAME = 'Boards';
/**
 * Get lists of all Boards
 * @async
 * @returns {Promise} List of all Boards
 */
const getAll = async () => myDB.getAllEntities(TABLE_NAME);

/**
 * Get board by its id
 *@async
 *@param {string} boardId Id of requested board
 *@returns {Promise} Requested board instance
 */
const get = async (boardId) => {
  const board = await myDB.getEntity(TABLE_NAME, boardId);
  return board;
};
/**
 * Create a new Board in database
 * @async
 * @param {Object.<Boards>} board Object with board fields
 * @returns {Promise}  New instance of Boards
 */
const save = async (board) => myDB.saveEntity(TABLE_NAME, board);

/**
 * Removed board by its id
 * @async
 * @param {string} boardId Id of requested board
 * @returns {Promise} Removed board by its id
 */
const remove = async (boardId) => myDB.removeEntity(TABLE_NAME, boardId);

/**
 * Updates board by its id
 * @async
 * @param {string} boardId  Id of requested board
 * @param {Object.<Boards>} board Object with board fields
 * @returns {Promise} Updated board instance
 */
const update = async (boardId, board) => {
  const entity = await myDB.updateEntity(TABLE_NAME, boardId, board);
  return entity;
};
module.exports = { getAll, get, save, remove, update };
