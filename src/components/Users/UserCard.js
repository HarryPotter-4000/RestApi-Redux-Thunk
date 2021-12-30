import React from 'react'
import cardStyles from './Users.module.css'

const UserCard = ({ name, username, avatar }) => {

  return (
    <div className={cardStyles.box}>
      <img className={cardStyles.avatar} src={avatar} alt="" />
      <div className={cardStyles.title}>
        <p className={ cardStyles.name }>{ name }</p>
        <p className={ cardStyles.username }>{ username }</p>
      </div>
    </div>
	);
}

export default UserCard;
