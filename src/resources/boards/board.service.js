const Board = require('./board.model');
const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

const get = boardId=> boardsRepo.get(boardId);

const remove = boardId=>boardsRepo.remove(boardId);

const save = board=>boardsRepo.save(new Board(board))

const update=(boardId, board)=>boardsRepo.update(boardId,board);

module.exports = { getAll,get,remove,save,update};