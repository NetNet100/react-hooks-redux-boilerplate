import {actionTypes} from './actionTypes';

export const addName = (newName) => {
    return {
        type: actionTypes.ADD_NAME,
        payload: newName
    }
};
