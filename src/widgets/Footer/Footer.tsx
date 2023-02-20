import styles from './Footer.module.scss'
import React from 'react'
import {Outlet} from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <Outlet />
      <footer className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.icons}>
            {['_icon-instagram' ,'_icon-telegram', '_icon-twitter', '_icon-youtube', '_icon-facebook']
              .map((icon, index) => <div key={index} className={icon}></div>)}
          </div>
        </div>
      </footer>
    </>)
}
