const myDB = require('../../utils/myDataBase');

const TABLE_NAME = 'Tasks';

/**
 *  Get lists of all Tasks
 * @async
 * @returns {Promise} List of all Tasks
 */
const getAll = async () => myDB.getAllEntities(TABLE_NAME);

/**
 * Get task by its id
 * @async
 * @param {string} taskId Id of requested task
 * @returns {Promise} Requested task instance
 */
const get = async (taskId) => {
  const task = await myDB.getEntity(TABLE_NAME, taskId);
  return task;
};

/**
 * Create a new Tasks in database
 * @async
 * @param {Object.<Tasks>} task  Object with task fields
 * @returns {Promise}  New instance of Tasks
 */
const save = async (task) => myDB.saveEntity(TABLE_NAME, task);

/**
 * Removed task by its id
 * @async
 * @param {string} taskId Id of requested task
 * @returns {Promise} Removed task by its id
 */
const remove = async (taskId) => myDB.removeEntity(TABLE_NAME, taskId);

/**
 *  Updates task by its id
 * @async
 * @param {string} taskId Id of requested task
 * @param {Object.<Tasks>} task  Object with task fields
 * @returns  {Promise} Updated task instance
 */
const update = async (taskId, task) => {
  const entity = await myDB.updateEntity(TABLE_NAME, taskId, task);
  return entity;
};
module.exports = { getAll, get, save, remove, update };
