import React from "react";
import styles from './BackButton.module.scss'

export interface BackButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

export const BackButton: React.FC<BackButtonProps> = ( { children, ...props } ) => {
  return (
    <button {...props} className={styles.button} >
      {children ? children : 'Back'}
    </button>
  )
}
