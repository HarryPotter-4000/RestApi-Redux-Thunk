import React from "react";
import { Link } from 'react-router-dom'
import headerStyles from "./Header.module.css"

function Header() {
  return (
    <div className={headerStyles.navigation}>
      <ul className={headerStyles.list}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/users'>Users</Link></li>
        <li><Link to='/adduser'>Add Users</Link></li>
        {/* <li><Link to='/tweets'>Tweets</Link></li>
        <li><Link to='/addtweet'>Add Tweet</Link></li> */}
      </ul>
    </div>
    
  )
}

export default Header;