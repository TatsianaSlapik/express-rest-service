const myDB=require("../../utils/myDataBase");

const TABLE_NAME="Boards"

const getAll = async () => myDB.getAllEntities(TABLE_NAME);
  
const get =async boardId=>{
  const board=await myDB.getEntity(TABLE_NAME,boardId);
return board
}

const save=async board=>myDB.saveEntity(TABLE_NAME,board)

const remove= async boardId=>myDB.removeEntity(TABLE_NAME,boardId)

const update= async (boardId,board)=>{
const entity= await myDB.updateEntity(TABLE_NAME,boardId, board);
return entity;
}
module.exports = { getAll, get, save, remove, update };