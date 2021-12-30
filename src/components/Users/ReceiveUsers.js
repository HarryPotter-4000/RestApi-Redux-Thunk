import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserCard from './UserCard'
import styles from './Users.module.css'


function ReceiveUsers() {
	const [users, setUsers] = useState([])

	useEffect(() => {
		axios
			.get(`http://domer.tech:9999/users`)
			.then(res => {
        setUsers(res.data.data)
			})
      .catch(err => {
        console.log(err)
			})
	}, [])

	return (
    <div className={styles.container}>
      {users.map(user => {
        return (
          <UserCard
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

export default ReceiveUsers;