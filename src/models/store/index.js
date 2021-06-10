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
                state.history = [
                    ...state.history,
                    payload
                ];

                // Switching player boolean flag
                state.xIsNext = !state.xIsNext;
                state.stepNumber = state.history.length - 1;
            },
            setWinner(state, payload) {
                state.winner = payload;
            }
        },
        actions: {
            play(context, payload) {
                context.commit('play', payload);
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
