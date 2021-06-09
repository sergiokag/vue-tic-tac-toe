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
        }
    });
};

export const store = initStore();
