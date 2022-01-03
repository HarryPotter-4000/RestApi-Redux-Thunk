import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ModelCard from '../model/ModelCard'
import styles from './Users.module.css'
import { getUsers } from '../redux/actions'


function GetUsers() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className={styles.container}>
      {users.map(user => {
        return (
          <ModelCard
            avatar={user.avatar}
            name={user.name}
            username={user.username}
            key={user.id}
          />
        )
      })}
    </div>
	)
}

export default GetUsers;