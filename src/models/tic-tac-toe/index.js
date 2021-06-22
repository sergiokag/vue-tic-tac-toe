import * as actions from '../tic-tac-toe/actions';
import reducer from './reducer';
import useTicTacToeModel from './useTicTacToeModel';
import { ticTacToePlayEpic } from './epics';

export { actions, reducer, useTicTacToeModel, ticTacToePlayEpic };
