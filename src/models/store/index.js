import { createStore } from 'vuex'

const initialState = {
    history: [
        {
            squares: Array(9).fill(null),
        },
    ],
}

const initStore = () => {
    return createStore({
        state: initialState
    });
};

export const store = initStore();
