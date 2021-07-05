import {
    setPlayer1 as setPlayerName1,
    setPlayer2 as setPlayerName2,
    resetPlayers as resetPlayersNames
} from "./actions";

const usePlayersModel = ({ dispatch }) => {

    const setPlayer1 = name => {
        dispatch(setPlayerName1(name));
    };

    const setPlayer2 = name => {
        dispatch(setPlayerName2(name));
    };

    const resetPlayers = () => {
        dispatch(resetPlayersNames());
    };

    return {
        setPlayer1,
        setPlayer2,
        resetPlayers,
    };
};

export default usePlayersModel;
