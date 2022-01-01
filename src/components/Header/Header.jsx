import React from "react";
import { NavLink  } from 'react-router-dom'
import headerStyles from "./Header.module.css"

function Header() {
  return (
    <div className={headerStyles.navigation}>
      <ul className={headerStyles.list}>
        <li><NavLink  to='/rest-api-redux-thunk/'>Home</NavLink></li>
        <li><NavLink  to='/users'>Users</NavLink></li>
        <li><NavLink  to='/adduser'>Add Users</NavLink></li>
      </ul>
    </div>
    
  )
}

export default Header;