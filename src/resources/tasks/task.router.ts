import * as express from 'express';
import TaskService from './task.service';
import Task from './task.model';

const router = express.Router();
const taskService = new TaskService();

router.route('/boards/:boardId/tasks').get(async (_req, res) => {
  const boards = await taskService.getAll();
  res.json(boards.map(Task.toResponse));
});

router.route('/boards/:boardId/tasks/:taskId').get(async (req, res) => {
  const task = await taskService.get(req.params.taskId);
  if (task) {
    res.status(200).json(Task.toResponse(task));
  } else {
    res.sendStatus(404);
  }
});

router.route('/boards/:boardId/tasks/:taskId').delete(async (req, res) => {
  await taskService.remove(req.params.taskId);
  res.sendStatus(200);
});

router.route('/boards/:boardId/tasks').post(async (req, res) => {
  req.body.boardId = req.params.boardId;
  const board = await taskService.save(Task.fromRequest(req.body));
  res.status(201).json(Task.toResponse(board));
});

router.route('/boards/:boardId/tasks/:taskId').put(async (req, res) => {
  const board = await taskService.update(
    req.params.taskId,
    Task.fromRequest(req.body)
  );
  res.status(200).json(Task.toResponse(board));
});

export default router;
