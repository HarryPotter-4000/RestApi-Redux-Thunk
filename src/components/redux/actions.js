export const ADD_USER = 'ADD_USER';
export const POST_USER = 'POST_USER';

export const addUser = (user) => ({
    type: ADD_USER,
    payload: user,
})
export const postUser = (user) => ({
    type: POST_USER,
    payload: user,
})

