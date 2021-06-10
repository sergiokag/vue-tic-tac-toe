import { createStore } from 'vuex'

const initialState = {
    history: [
        {
            squares: Array(9).fill(null),
        },
    ],
    winner: null,
    stepNumber: 0,
    xIsNext: true,
}

const initStore = () => {
    return createStore({
        state: initialState,
        mutations: {
            play(state, payload) {
                state.history = payload;
                state.xIsNext = !state.xIsNext;
                state.stepNumber = state.history.length - 1;
            },
            setWinner(state, payload) {
                state.winner = payload;
            },
            selectMove(state, payload) {
                state.stepNumber = payload;
                state.xIsNext = payload % 2 === 0;
            }
        },
        getters: {
            history$$: state => state.history,
            squares$$: state => state.history[state.stepNumber].squares,
            winner$$: state => state.winner,
            xIsNext$$: state => state.xIsNext,
        }
    });
};

export const store = initStore();
