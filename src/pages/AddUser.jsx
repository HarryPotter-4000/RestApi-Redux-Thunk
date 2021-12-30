import React from "react";
import UserList from '../components/AddUser/UserList';
import ReceiveUsers from '../components/Users/ReceiveUsers';
import { store } from '../components/redux/store';
import { Provider } from 'react-redux';

const AddUser = () => {

  return (
    <Provider store={store}>
      <div>
        <UserList />
        <ReceiveUsers />
      </div>
    </Provider>
	);
}

export default AddUser;

// https://64.media.tumblr.com/800f57372759db02d1aa4baf4124c517/e5a9c3170fd1d5ce-5f/s250x400/4bc059ed3a048e4e195998f6428827e9efc0c69d.png