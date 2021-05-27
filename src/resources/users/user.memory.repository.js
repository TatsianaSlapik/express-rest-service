const myDB=require("../../utils/myDataBase");

const TABLE_NAME="Users"

const getAll = async () => myDB.getAllEntities(TABLE_NAME);
  
const get =async userId=>{
  const user=await myDB.getEntity(TABLE_NAME,userId);
return user
}

const save=async user=>myDB.saveEntity(TABLE_NAME,user)

const remove= async userId=>myDB.removeEntity(TABLE_NAME,userId)

const update= async (userId,user)=>{
const entity= await myDB.updateEntity(TABLE_NAME,userId, user);
return entity;
}
module.exports = { getAll, get, save, remove, update };
