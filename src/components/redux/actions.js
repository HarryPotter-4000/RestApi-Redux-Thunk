export const SHOW_USERS = 'SHOW_USERS';
export const CREATE_USER = 'CREATE_USER';

export const showUsers = (users) => ({
    type: SHOW_USERS,
    payload: users,
})

export const createUser = (user) => ({
    type: CREATE_USER,
    payload: user,
})

export const getUsers = () => async (dispatch) => {
    try {
        let res = await fetch("http://domer.tech:9999/users/");
        const data = await res.json();
        dispatch(showUsers(data));
    } catch (e) {
        console.log(e);
    }
};

export const addUser = (user) => async (dispatch) => {
    try {
        const response = await fetch("http://domer.tech:9999/users/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        const data = await response.json();
        dispatch(createUser(data.data));

    } catch (e) {
        console.log(e);
    }
};
