import { combineReducers } from "redux";
import { gameReducer } from "./game.reducer";
import { playersReducer } from "./players.reducer";

export const reducers = combineReducers({
    game: gameReducer,
    players: playersReducer,
});

export { gameReducer, playersReducer };