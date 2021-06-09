import { store } from '../store/index';
import GameProcessor from '../../utils/GameProcessor';

class GameFacadeClass {

    constructor(store) {
        this.store = store;
    }

    history$$() {
        return this.store.getters.history$$;
    }

    squares$$() {
        return this.store.getters.squares$$;
    }

    // TODO: MORE REFACTOR: MOVE IT TO MUTATIONS 
    play({ value, index }) {
        if (value || this.store.state.winner) {
            return;
        }

        const _history = this.store.state.history.slice(0, this.store.state.stepNumber + 1);
        const _current = _history[_history.length - 1];
        const _squares = _current.squares.slice();

        _squares[index] = this.store.state.xIsNext ? "X" : "O";

        // Settinng new squares list
        this.store.state.history = [
            ..._history,
            {
                squares: _squares,
            },
        ];

        // Switching player boolean flag
        this.store.state.xIsNext = !this.store.state.xIsNext;
        this.store.state.stepNumber = this.store.state.history.length - 1;

        // Checking for winner
        const winner = GameProcessor.calculateWinner(_squares);
        if (winner) {
            this.store.state.winner = winner;
            return;
        }
    }
}

export const GameFacade = new GameFacadeClass(store);
