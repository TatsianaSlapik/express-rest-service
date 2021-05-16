const User=require('../resources/users/user.model');

const myDb={
    Users:[],
    Boards:[],
    Tasks:[],
    tableUsersStructure: ()=>{
        
    },
  
}
(()=>{for(let i=0;i<3; i+1){
    myDb.Users.push(new User());
}

})();

const getAllEntities= tableName=>myDb[tableName].filter(ent=>ent);

const getEntity=(tableName,id)=>{
    const entities= myDb[tableName].filter(ent=>ent).filter(ent=>ent.id===id)
    return entities[0];
};

const removeEntity=(tableName,id)=>{
    const entity= getEntity(tableName,id);
    if(entity){
        myDb[`table${tableName}Structure`](entity);
        const index= myDb[tableName].indexOf(entity);
        myDb[tableName]=[...myDb[tableName].slice(0,index),
        ...(myDb[tableName].length>index+1 ? myDb[tableName].slice(index+1)
        :[])]; 
    }
    return entity;
};

const saveEntity=(tableName,entity)=>{
    myDb[tableName].push(entity);
    return getEntity(tableName,entity.id);
};

const updateEntity=(tableName,id,entity)=>{
const oldEnt= getEntity(tableName,id);
if(oldEnt){
    myDb[tableName][myDb[tableName].indexOf(oldEnt)]={...entity};
}
return getEntity(tableName,id);
};

module.exports={
    getAllEntities,getEntity,removeEntity,saveEntity,updateEntity
}
