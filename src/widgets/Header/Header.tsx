import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

import styles from './Header.module.scss'
import {BackButton, Button, SearchInput} from "shared/ui";

import {Navigation, Avatar, LoginModal, RegistrationModal} from "./components";

import {useAuthContext, useExit} from "entities/Auth";
import {CartButton} from "entities/Cart";

import logo from 'static/icons/logo-2.svg';

export const Header = () => {
  const [loginActive, setLoginActive] = useState(false)
  const [registrationActive, setRegistrationActive] = useState(false)
  const { isAuth } = useAuthContext()
  const exit  = useExit()

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_container}>
          <div className={styles.header_left}>

            <NavLink className={styles.logo} to='menu'>
              <img alt='logo' src={logo}/>
            </NavLink>

            <div>
              <SearchInput />
            </div>
          </div>
          <div className={styles.header_right}>

            {isAuth && <Navigation />}

            <NavLink to={'cart'}>
              <CartButton />
            </NavLink>

            {isAuth &&
            <>

              <Avatar />

              <Button className={styles.button} onClick={() => exit()}>
                Exit
              </Button>
            </>}

            {!isAuth &&
            <>
              <Button className={styles.button} onClick={() => setLoginActive(true)}>
                Sign in
              </Button>

              <BackButton className={styles.button} onClick={() => setRegistrationActive(true)}>
                Sign up
              </BackButton>
            </>}
          </div>
        </div>

        <LoginModal  setActive={setLoginActive} active={loginActive}/>

        <RegistrationModal setActive={setRegistrationActive} active={registrationActive} />
      </header>

      <div className={styles.divider}></div>
    </>
  )
}
