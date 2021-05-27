const router = require('express').Router();
const Board = require('./board.model');
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(boards.map(Board.toResponse));
});

router.route('/:boardId').get(async (req, res) => {
  const board = await boardService.get(req.params.boardId);
  if(board){
  res.status(200).send(Board.toResponse(board));
  }else{
    res.sendStatus(404);
  }
});

router.route('/:boardId').delete(async (req, res) => {
   await boardService.remove(req.params.boardId);
  res.sendStatus(200);
});

router.route('/').post(async (req, res) => {
  const board = await boardService.save(Board.fromRequest(req.body));
 res.status(201).json(Board.toResponse(board));
});

router.route('/:boardId').put(async (req, res) => {
  const board = await boardService.update(req.params.boardId, Board.fromRequest(req.body));
 res.status(200).json(Board.toResponse(board));
});

module.exports = router;