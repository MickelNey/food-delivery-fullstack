import React from 'react'
import {Button, Input} from "shared/ui";
import {Modal} from "shared/components";
import {useValidation, validRegExp} from 'shared'

import {useLogin} from "entities/Auth";

import styles from './LoginModal.module.scss'

interface ILogin {
  setActive: React.Dispatch<React.SetStateAction<boolean>>,
  active: boolean
}

export const LoginModal = ({ active, setActive }: ILogin) => {
  const [email, setEmail, emailValid] = useValidation('', validRegExp.email)
  const [password, setPassword, passwordValid] = useValidation('', validRegExp.password)
  const { loginAsync } = useLogin()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    await loginAsync({
      email: email,
      password: password
    })
    setActive(false)
  }//

  return (
    <Modal setActive={setActive} active={active}>
      <div className={styles.title}>Login</div>

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
        type='password'
        title='Password'
        valid={passwordValid}
        placeholder='min. 8 characters'
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e)}
      />

      <Button
        className={styles.button}
        disabled={!passwordValid || !emailValid}
        onClick={(e) => { handleSubmit(e) }}
      >
        Login
      </Button>
    </Modal>
  )
}
