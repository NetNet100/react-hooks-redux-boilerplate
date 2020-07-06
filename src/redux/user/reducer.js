import {actionTypes} from "./actionTypes";

const userState = {
    users: []
};

export const usersReducer = (state = userState, action) => {
    switch (action.type) {
        case actionTypes.ADD_NAME :
            state.users.push(action.payload);
            return {...state, users: state.users};
        default:
            return state
    }
};