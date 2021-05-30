import * as express from 'express';
import BoardService from './board.service';

import Board from './board.model';

const router = express.Router();
const boardService = new BoardService();

router.route('/').get(async (_req, res) => {
  const boards = await boardService.getAll();
  res.json(boards.map(Board.toResponse));
});

router.route('/:boardId').get(async (req, res) => {
  const board = await boardService.get(req.params.boardId);
  if (board) {
    res.status(200).send(Board.toResponse(board));
  } else {
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
  const board = await boardService.update(
    req.params.boardId,
    Board.fromRequest(req.body)
  );
  res.status(200).json(Board.toResponse(board));
});

export default router;
