import actionTypes from '@reduxStore/actions/actionTypes';

export const addTutorial = (value: string, id: number) => {
    return {
        type: actionTypes.ADD_TUTORIAL,
        payload: {
            id: id,
            name: value,
        },
    };
};

export const removeTutorial = (taskNameToDelete: string) => {
    return {
        type: actionTypes.REMOVE_TUTORIAL,
        payload: { name: taskNameToDelete },
    };
};
