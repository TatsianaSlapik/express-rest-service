import { IBoard } from './IBoard';
import BoardRepository from './board.memory.repository';
import Board from './board.model';

export default class BoardService {
  boardsRepo: BoardRepository;

  constructor() {
    this.boardsRepo = new BoardRepository();
  }

  getAll = (): Promise<IBoard[]> => this.boardsRepo.getAll();

  get = (boardId: string): Promise<IBoard> => this.boardsRepo.get(boardId);

  remove = (boardId: string): Promise<IBoard> =>
    this.boardsRepo.remove(boardId);

  save = (board: IBoard): Promise<IBoard> =>
    this.boardsRepo.save(new Board(board));

  update = (boardId: string, board: IBoard): Promise<IBoard> =>
    this.boardsRepo.update(boardId, board);
}
