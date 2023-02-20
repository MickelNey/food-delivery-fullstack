import React from "react";
import styles from "./Input.module.scss";


interface InputProps extends React.HTMLProps<HTMLInputElement> {
  title?: string
  valid?: boolean
  star?: boolean
}

export const Input: React.FC<InputProps> = ({
  title = 'form',
  valid = false,
  star = true,
  ...props }) => {
  return (
    <div className={props.className}>
      <div className={`${styles.title} ${star ? styles.title_star : ''}`}>{title}</div>

      <div className={`${styles.input_container} ${valid ? styles.valid : styles.noValid}`}>
        <input {...props}
          className={`${styles.input}`}
        />
      </div>
    </div>
  );
};
