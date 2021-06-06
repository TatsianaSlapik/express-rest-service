import express from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import userRouter from './resources/users/user.router';
import boardsRouter from './resources/boards/board.router';
import tasksRouter from './resources/tasks/task.router';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use((req, res, next) => {
  process.stdout.write(`Request url: ${req.originalUrl}\n`);
  process.stdout.write(`Request query: ${JSON.stringify(req.query)}\n`);
  process.stdout.write(`Request method: ${req.method}\n`);
  process.stdout.write(`Response status code: ${res.statusCode}\n`);
  next();
});

app.use((err, _req, res, _next) => {
  process.stdout.write(err.stack);
  res.status(500).send('Something broke!');
});

process.on('uncaughtException', (err) => {
  process.stdout.write(
    `An error occurred while application execution: ${err.message}\n`
  );
  process.exit(1);
});

process.on('unhandledRejection', (reason, p) => {
  process.stdout.write(
    `Possibly Unhandled Rejection at: Promise ${p} reason: ${reason}\n`
  );
});

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardsRouter);
app.use(tasksRouter);

export default app;
