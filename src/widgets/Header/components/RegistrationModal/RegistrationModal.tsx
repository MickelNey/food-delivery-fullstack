import React from 'react'
import styles from './RegistrationModal.module.scss'

import {Button, Input} from "shared/ui";
import {Modal} from "shared/components";
import {useValidation, validRegExp} from "shared";

import {useRegistration} from "entities/Auth";

interface IRegistration {
  setActive: React.Dispatch<React.SetStateAction<boolean>>,
  active: boolean
}

export const RegistrationModal = ({ active, setActive }: IRegistration) => {
  const [email, setEmail, emailValid] = useValidation('', validRegExp.email)
  const [name, setName, nameValid] = useValidation('', validRegExp.name)
  const [password, setPassword, passwordValid] = useValidation('', validRegExp.password)
  const [confirmPass, setConfirmPass, confirmPassValid] = useValidation('', validRegExp.password)
  const { registerAsync } = useRegistration()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    await registerAsync({
      email: email,
      name: name,
      password: password
    })
    setActive(true)
  }//

  return (
    <Modal setActive={setActive} active={active}>
      <div className={styles.title}>Registration</div>

      <Input
        className={styles.input}
        title='Email'
        placeholder='name@example.com'
        valid={emailValid}
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e)}
      />

      <Input
        className={styles.input}
        title='Name'
        valid={nameValid}
        placeholder='your name'
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e)}
      />

      <Input
        className={styles.input}
        type='password'
        title='Password'
        valid={passwordValid}
        placeholder='min. 8 characters'
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e)}
      />

      <Input
        className={styles.input}
        type='password'
        title='Repeat Password'
        valid={confirmPassValid}
        placeholder='min. 8 characters'
        value={confirmPass}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPass(e)}
      />

      <Button
        className={styles.button}
        disabled={(!passwordValid || !emailValid) || (password !== confirmPass)}
        onClick={(e) => { handleSubmit(e) }}
      >Sign Up</Button>
    </Modal>
  )
}
