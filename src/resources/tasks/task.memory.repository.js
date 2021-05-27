const myDB=require("../../utils/myDataBase");

const TABLE_NAME="Tasks"

const getAll = async () => myDB.getAllEntities(TABLE_NAME);
  
const get =async taskId=>{
  const task=await myDB.getEntity(TABLE_NAME,taskId);
return task
}

const save=async task=>myDB.saveEntity(TABLE_NAME,task)

const remove= async taskId=>myDB.removeEntity(TABLE_NAME,taskId)

const update= async (taskId,task)=>{
const entity= await myDB.updateEntity(TABLE_NAME,taskId, task);
return entity;
}
module.exports = { getAll, get, save, remove, update };