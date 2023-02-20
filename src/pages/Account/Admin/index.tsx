import React from "react";
import {Button, LoadingSpinner} from "shared/ui";
import styles from './AdminSettings.module.scss'
import {useUsers} from "entities/User";

export const AdminSettings = () => {

  const { users, isError, isLoading } = useUsers()

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (isError) {
    alert('error')
  }

  console.log(users)

  return (
    <div className={styles.container}>
      {users && users.map(user =>
        <div className={styles.userLine} key={user.id}>

          <div>{user.name}</div>

          <div>
            <div className={styles.roles}>
              {user.roles
                .sort((role1, role2) => (role1.id - role2.id))
                .map(role => <div className={styles.roleItem} key={role.id}>{role.value}</div>)}
            </div>
          </div>

          <Button>add role</Button>
        </div>
      )}
    </div>)
}
