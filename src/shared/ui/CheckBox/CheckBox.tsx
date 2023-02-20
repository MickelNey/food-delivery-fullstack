import React from 'react'
import styles from './CheckBox.module.scss'

interface CheckBoxProps extends React.HTMLProps<HTMLInputElement> {
  label?: string
}

export const CheckBox: React.FC<CheckBoxProps> = ( {label = '', ...props}) => {
  return(<label className={styles.checkbox_container} >
    <input className={styles.checkbox} type="checkbox" checked={props.checked} {...props}/>

    <span className={styles.custom_checkbox} />

    <span className={styles.label}>{label}</span>
  </label>)
}
