import React, {useEffect, useState} from 'react'
import {NavLink, Outlet, useNavigate} from "react-router-dom";

import {Page} from "../Page";
import {routePaths} from "../routes";

import {LoadingSpinner, Select} from "shared/ui";
import {useProfile} from "entities/Auth";

import styles from './Account.module.scss'

export const AccountPage = () => {
  const [state, setState] = useState<string>('USER')
  const { userData, isLoading, isError } = useProfile(routePaths.main)
  const navigate = useNavigate()

  useEffect(() => {
    navigate(routePaths.account_user)
  }, [])

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (isError) return <div>error</div>

  const Roles = <>{userData && userData.roles.map(role => {
    if (`account_${role.value.toLowerCase()}` in routePaths) {
      return (
        <NavLink
          key={role.value}
          to={`${role.value.toLowerCase()}`}
          className={styles.link}
          onClick={() => { setState(role.value)}}
        >
          <Select
            label={`${role.value} settings`}
            active={state === role.value}
          />
        </NavLink>)}
  })}</>
  
  return (
    <Page>
      <div className={styles.page}>
        <div className={styles.roles}>
          {Roles}
        </div>
        <Outlet />
      </div>
    </Page>
  )
}
