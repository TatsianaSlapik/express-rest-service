const { v4: uuid } = require('uuid');

class Column {
  constructor({
    id = uuid(),
    title = 'name',
    order = 0,
   
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
   
  }

   static toResponse(column) {
    const { id, title, order } = column;
    return { id, title, order };
  }

  static fromRequest(body){
return new Column(body);
  } 
}

module.exports = Column;