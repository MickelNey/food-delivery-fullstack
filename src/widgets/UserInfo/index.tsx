import styles from "../../pages/Account/User/UserSettings.module.scss";
import {Input} from "../../shared/ui";
import React, {useState} from "react";

interface UserInfoProps {
  name: string
  address: string
  phone: string
  secondName: string
}

export const UserInfo = (user: UserInfoProps) => {
  const [name, setName] = useState(user.name)

  return (
    <div className={styles.inputs}>
      <Input
        className={styles.inputs_item}
        title={'Name'}
        defaultValue={user.name}
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />

      <Input
        className={styles.inputs_item}
        star={false}
        title={'Address'}
        defaultValue={user.address}
      />

      <Input
        className={styles.inputs_item}
        title={'Phone'}
        star={false}
        defaultValue={user.phone}
      />

      <Input
        className={styles.inputs_item}
        star={false}
        title={'Second name'}
        defaultValue={user.secondName}
      />
    </div>
  )
}
