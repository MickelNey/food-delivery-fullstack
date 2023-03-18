import styles from './Avatar.module.scss'
import React from 'react'
import { NavLink } from "react-router-dom";
import logo from 'static/icons/user.svg';

export const Avatar = () => {

  return (
    <div className={styles.avatar}>
      <NavLink to='account/user'>
        <img alt='user' src={logo} />
      </NavLink>
    </div>
  )
}
