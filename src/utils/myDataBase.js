const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');

const myDb = {
  Users: [],
  Boards: [],
  Tasks: [],

  tableUsersStructure: (user) => {
    if (user) {
      myDb.Tasks.filter((task) => task).forEach((task) => {
        const tempTask = task;
        tempTask.userId = task.userId === user.id ? null : task.userId;
      });
    }
  },
  tableBoardsStructure: (board) => {
    if (board) {
      myDb.Tasks.filter((task) => task && task.boardId === board.id).forEach(
        (task) => {
          myDb.Tasks[myDb.Tasks.indexOf(task)] = undefined;
        }
      );
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  tableTasksStructure: () => {},
};
(() => {
  myDb.Users.push(new User());
  const board = new Board();
  myDb.Boards.push(board);
  myDb.Tasks.push(new Task({ boardId: board.id }));
})();

/**
 * This function returns an array of all entity
 * For example if tableName = Users
 *  then it will return an array of all users
 * Empty array or an array of objects of the form {
    "id": string,
    "name": string,
    "login": string
  }
 * @param {String} tableName name entity
 * @returns {Array} array of all entity
 */
const getAllEntities = (tableName) => myDb[tableName].filter((ent) => ent);

/**
 * This function returns an entity object by the passed identifier (id)
 * For example if tableName = Users and id=idUser
 * then it will return an object with the given idUser{
    "id": string,
    "name": string,
    "login": string
  }
 * @param {String} tableName Name entity
 * @param {String} id Id of requested entity
 * @returns {Object} Requested instance
 */
const getEntity = (tableName, id) => {
  const entities = myDb[tableName]
    .filter((ent) => ent)
    .filter((ent) => ent.id === id);
  return entities[0];
};

/**
 *This function removes the entity by the passed identifier and returns the deleted object.
 *For example if tableName = Users and id=idUser
 * then it will remove and return an object with the given idUser{
    "id": string,
    "name": string,
    "login": string
  }
 * @param {String} tableName Name entity
 * @param {String} id Id of requested entity
 * @returns {Object} Remote instance
 */
const removeEntity = (tableName, id) => {
  const entity = getEntity(tableName, id);
  if (entity) {
    myDb[`table${tableName}Structure`](entity);
    const index = myDb[tableName].indexOf(entity);
    myDb[tableName] = [
      ...myDb[tableName].slice(0, index),
      ...(myDb[tableName].length > index + 1
        ? myDb[tableName].slice(index + 1)
        : []),
    ];
  }
  return entity;
};

/**
 * This function adds a new entity object and returns it
 * For example if tableName = Users and new object user  {
    "id": string,
    "name": "user1",
    "login": "login1"
    "password": "password1"
  }
   then it will returns object created  {
    "id": string,
    "name": "user1",
    "login": "login1"
  }
 * @param {String} tableName Name entity
 * @param {Object} entity Object with entity fields
 * @returns {Object} New instance of entity
 */
const saveEntity = (tableName, entity) => {
  myDb[tableName].push(entity);
  return getEntity(tableName, entity.id);
};

/**
 * This function updates entity data by ID and returns a new entity object.
 * For example if tableName = Users and id=idUser
 * then it will update object with the given idUser{
    "id": string,
    "name": string,
    "login": string,
    "password": string
  } and return new object with the given idUser{
      "id": string,
    "name": string1,
    "login": string1
  }
 * @param {String} tableName Name entity
 * @param {String} id Id of requested entity
 * @param {Object} entity  Object with entity fields
 * @returns {Object} Updated entity instance
 */
const updateEntity = (tableName, id, entity) => {
  const oldEnt = getEntity(tableName, id);
  if (oldEnt) {
    myDb[tableName][myDb[tableName].indexOf(oldEnt)] = { ...entity };
  }
  return getEntity(tableName, id);
};

module.exports = {
  getAllEntities,
  getEntity,
  removeEntity,
  saveEntity,
  updateEntity,
};
