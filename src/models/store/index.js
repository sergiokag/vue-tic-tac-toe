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
            },
            restart(state) {
                state.history = [
                    {
                        squares: Array(9).fill(null),
                    },
                ];
                state.xIsNext = true;
                state.stepNumber = 0;
                state.winner = null;
            }
        },
        getters: {
            history$$: state => state.history,
            squares$$: state => state.history[state.stepNumber].squares,
            winner$$: state => state.winner,
            xIsNext$$: state => state.xIsNext,
        },
        devtools: true,
    });
};

export const store = initStore();
