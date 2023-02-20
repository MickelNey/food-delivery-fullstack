import React from "react";
import styles from "./RedButton.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children?: React.ReactNode
}

export const RedButton: React.FC<ButtonProps> = ({  children, disabled,...props } ) => {
  return (
    <div className={props.className}>
      <button {...props} disabled={disabled}
        className={`${styles.button} ${disabled ? styles.button_disabled: ''}`}>
        {children ? children : 'Continue'}
      </button>
    </div>)
}
