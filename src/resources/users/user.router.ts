import * as express from 'express';
import UsersService from './user.service';
import User from './user.model';

const router = express.Router();

const usersService = new UsersService();

router.route('/').get(async (_req, res) => {
  const users = await usersService.getAll();

  res.json(users.map(User.toResponse));
});

router.route('/:userId').get(async (req, res) => {
  const user = await usersService.get(req.params.userId);
  res.status(200).json(User.toResponse(user));
});
router.route('/:userId').delete(async (req, res) => {
  await usersService.remove(req.params.userId);
  res.sendStatus(200);
});

router.route('/').post(async (req, res) => {
  const user = await usersService.save(User.fromRequest(req.body));
  res.status(201).json(User.toResponse(user));
});

router.route('/:userId').put(async (req, res) => {
  const user = await usersService.update(
    req.params.userId,
    User.fromRequest(req.body)
  );
  res.status(200).send(User.toResponse(user));
});

export default router;
