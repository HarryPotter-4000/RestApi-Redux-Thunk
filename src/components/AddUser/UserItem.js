import React from 'react'
import styles from './CreateCard.module.css'

const UserItem = ({ name, username, avatar }) => {

  return (
    <div className={styles.box}>
      <img className={styles.avatar} src={avatar} alt="" />
      <div className={styles.title}>
        <p className={ styles.name }>{ name }</p>
        <p className={styles.username}>{username}</p>
      </div>
    </div>
	);
}

export default UserItem;