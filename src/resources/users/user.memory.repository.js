const myDB = require('../../utils/myDataBase');

const TABLE_NAME = 'Users';
/**
 * Get lists of all users
 * @async
 * @returns {Promise} List of all users
 */
const getAll = async () => myDB.getAllEntities(TABLE_NAME);

/**
 * Get user by its id
 * @async
 * @param {string} userId Id of requested user
 * @returns {Promise} Requested user instance
 */
const get = async (userId) => {
  const user = await myDB.getEntity(TABLE_NAME, userId);
  return user;
};
/**
 * Create a new User in database
 * @async
 * @param {Object.<User>} user Object with user fields
 * @returns {Promise}  New instance of Users
 */
const save = async (user) => myDB.saveEntity(TABLE_NAME, user);

/**
 * Removed user by its id
 * @async
 * @param {string} userId Id of requested user
 * @returns {Promise} Removed user by its id
 */
const remove = async (userId) => myDB.removeEntity(TABLE_NAME, userId);

/**
 * Updates user by its id
 * @async
 * @param {string} userId Id of requested user
 * @param {Object.<User>} user Object with user fields
 * @returns {Promise} Updated user instance
 */
const update = async (userId, user) => {
  const entity = await myDB.updateEntity(TABLE_NAME, userId, user);
  return entity;
};
module.exports = { getAll, get, save, remove, update };
