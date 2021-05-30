import { ITask } from './ITask';
import TaskRepository from './task.memory.repository';
import Task from './task.model';

export default class TaskService {
  tasksRepo: TaskRepository;

  constructor() {
    this.tasksRepo = new TaskRepository();
  }

  getAll = (): Promise<ITask[]> => this.tasksRepo.getAll();

  get = (taskId: string): Promise<ITask> => this.tasksRepo.get(taskId);

  remove = (taskId: string): Promise<ITask> => this.tasksRepo.remove(taskId);

  save = (task: ITask): Promise<ITask> => this.tasksRepo.save(new Task(task));

  update = (taskId: string, task: ITask): Promise<ITask> =>
    this.tasksRepo.update(taskId, task);
}
