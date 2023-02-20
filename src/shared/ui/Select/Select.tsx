import styles from './Select.module.scss'
import React from "react";
import {NavLink, NavLinkProps} from "react-router-dom";

interface SelectType extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  active?: boolean;
  label: string;
  secondLabel?: string;
}

export const Select: React.FC<SelectType> = (
  { active = false,
    className,
    label,
    secondLabel = '',
    ...props }) => {
  return (
    <button className={`${styles.select} ${active ? styles.select_active : ''}` } {...props}>
      <div className={`${styles.icon} ${active ? styles.icon_active : ''} ${className}`} />

      <div>
        <div className={styles.label}>{label}</div>

        <div className={styles.secondary_label}>{secondLabel}</div>
      </div>

    </button>
  )
}
