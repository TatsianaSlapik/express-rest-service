const User = require('./user.model');
const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const get = userId=> usersRepo.get(userId);

const remove = userId=>usersRepo.remove(userId);

const save = user=>usersRepo.save(new User(user))

const update=(userId, user)=>usersRepo.remove(userId,user);

module.exports = { getAll,get,remove,save,update};
