import styles from './Avatar.module.scss'
import React from 'react'
import { NavLink } from "react-router-dom";

export const Avatar = () => {
  return (<div className={styles.avatar}>
    <NavLink to='account/user'>Ava</NavLink>
  </div>)
}
