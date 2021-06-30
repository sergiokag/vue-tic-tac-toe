export const actionCreator = type => {
    const actionCrt = payload => ({
        type,
        payload,
    });
    actionCrt.type = type;
    return actionCrt;
};
