const Task = require('./task.model');
const tasksRepo = require('./task.memory.repository');

/**
 * Get lists of all Tasks
 * @returns {Promise} List of all Tasks
 */
const getAll = () => tasksRepo.getAll();

/**
 * Get task by its id
 * @param {string} taskId Id of requested task
 * @returns {Promise} Requested task instance
 */
const get = (taskId) => tasksRepo.get(taskId);

/**
 * Removed task by its id
 * @param {string} taskId Id of requested task
 * @returns {Promise} Removed task by its id
 */
const remove = (taskId) => tasksRepo.remove(taskId);

/**
 * Create a new Tasks in database
 * @param {Object.<Tasks>} task  Object with task fields
 * @returns {Promise}  New instance of Tasks
 */
const save = (task) => tasksRepo.save(new Task(task));

/**
 *  Updates task by its id
 * @param {string} taskId Id of requested task
 * @param {Object.<Tasks>} task  Object with task fields
 * @returns  {Promise} Updated task instance
 */
const update = (taskId, task) => tasksRepo.update(taskId, task);

module.exports = { getAll, get, remove, save, update };
