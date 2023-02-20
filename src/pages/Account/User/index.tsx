import React, {useState} from "react";

import {BackButton, Input} from "shared/ui";

import styles from './UserSettings.module.scss'
import {useAuthContext} from "entities/Auth";
import {UpdateUserInfo} from "../../../features/updateUserInfo";

export const UserSettings = () => {

  const {user} = useAuthContext()
  const [name, setName] = useState(user.name)
  const [secondName, setSecondName] = useState(user.secondName)
  const [phone, setPhone] = useState(user.phone)
  const [address, setAddress] = useState(user.address)

  return (
    <div className={styles.container}>
      <div className={styles.title}>Personal details</div>

      <div className={styles.inputs}>
        <Input
          className={styles.inputs_item}
          title={'Name'}
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />

        <Input
          className={styles.inputs_item}
          star={false}
          title={'Address'}
          value={address}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
        />

        <Input
          className={styles.inputs_item}
          title={'Phone'}
          star={false}
          value={phone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
        />

        <Input
          className={styles.inputs_item}
          star={false}
          title={'Second name'}
          value={secondName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSecondName(e.target.value)}
        />
      </div>

      <div className={styles.divider}></div>
      <ul className={styles.changes}>

        <BackButton className={styles.changes_item}>
          Discard Changes
        </BackButton>

        <UpdateUserInfo
          className={styles.changes_item}
          user={{
            ...user,
            name: name,
            secondName: secondName,
            phone: phone,
            address: address
          }}
        />

      </ul>

    </div>
  )
}
