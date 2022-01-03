import { SHOW_USERS, CREATE_USER } from "./actions";

const initialState = {
    users: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_USERS:
            return { ...state, users: action.payload.data }
        case CREATE_USER:
            return {
                users: [action.payload, ...state.users],
            }
        default:
            return state;
    }
};