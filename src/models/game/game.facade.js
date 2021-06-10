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

    winner$$() {
        return this.store.getters.winner$$;
    }

    xIsNext$$() {
        return this.store.getters.xIsNext$$;
    }

    play({ value, index }) {
        if (value || this.store.state.winner) {
            return;
        }

        const _history = this.store.state.history.slice(0, this.store.state.stepNumber + 1);
        const _current = _history[_history.length - 1];
        const _squares = _current.squares.slice();

        _squares[index] = this.store.state.xIsNext ? "X" : "O";

        // Settinng new squares list
        this.store.commit('play', [
            ..._history,
            {
                squares: _squares,
            },
        ]);

        // Checking for winner
        const winner = GameProcessor.calculateWinner(_squares);
        if (winner) {
            this.store.commit('setWinner', winner);
            return;
        }
    }

    selectMove(step) {

        this.store.commit('selectMove', step);

        // TODO: REFACTOR DUPLICATE CODE: LINE (31)
        const _history = this.store.state.history.slice(0, this.store.state.stepNumber + 1);
        const _current = _history[_history.length - 1];
        const _squares = _current.squares.slice();

        // Checking for winner
        const winner = GameProcessor.calculateWinner(_squares);
        if (winner) {
            this.store.commit('setWinner', winner);
            return;
        }
        this.store.commit('setWinner', null);
    }

    restart() {
        this.store.commit('restart');
    }
}

export const GameFacade = new GameFacadeClass(store);
