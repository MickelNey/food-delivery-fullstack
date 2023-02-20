import styles from './Navigation.module.scss';
import React from "react";
import { NavLink } from "react-router-dom";
import {routePaths} from "pages/routes";

const setActive = ({isActive}: any ) => ({
  color: isActive ? 'var(--primary-default)' : ''
})

export const Navigation = () => {
  return (<>
    <nav className={`${styles.nav} ${styles.nav_container}`}>
      <NavLink
        className={styles.nav_item}
        style={setActive}
        to={routePaths.menu}>Menu
      </NavLink>
      <NavLink
        className={styles.nav_item}
        style={setActive}
        to={routePaths.orders}>My orders
      </NavLink>
    </nav>
  </>)
}
