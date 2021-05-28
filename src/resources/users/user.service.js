const User = require('./user.model');
const usersRepo = require('./user.memory.repository');

/**
 * Get lists of all users
 * @returns {Promise} List of all users
 */
const getAll = () => usersRepo.getAll();

/**
 * Get user by its id
 * @param {string} userId Id of requested user
 * @returns {Promise} Requested user instance
 */
const get = (userId) => usersRepo.get(userId);

/**
 * Removed user by its id
 * @param {string} userId Id of requested user
 * @returns {Promise} Removed user by its id
 */
const remove = (userId) => usersRepo.remove(userId);

/**
 * Create a new User in database
 * @param {Object.<User>} user Object with user fields
 * @returns {Promise}  New instance of Users
 */
const save = (user) => usersRepo.save(new User(user));

/**
 * Updates user by its id
 * @param {string} userId Id of requested user
 * @param {Object.<User>} user Object with user fields
 * @returns {Promise} Updated user instance
 */
const update = (userId, user) => usersRepo.update(userId, user);

module.exports = { getAll, get, remove, save, update };
