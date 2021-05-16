const Task = require('./task.model');
const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();

const get = taskId=> tasksRepo.get(taskId);

const remove = taskId=>tasksRepo.remove(taskId);

const save = task=>tasksRepo.save(new Task(task))

const update=(taskId, task)=>tasksRepo.update(taskId,task);

module.exports = { getAll,get,remove,save,update};