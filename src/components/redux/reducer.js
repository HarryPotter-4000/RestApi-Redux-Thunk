import { ADD_USER, POST_USER } from "./actions";

const initialState = {
    users: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                users: [...state.users, action.payload],
            }
        case POST_USER:
            return {
                users: [action.payload, ...state.users],
            }
        default:
            return state;
    }
};