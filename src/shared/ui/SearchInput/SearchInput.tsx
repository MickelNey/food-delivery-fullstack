import React from 'react'
import styles from './SearchInput.module.scss'

type SearchInputProps =  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const SearchInput = ({ ...props }: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  return (
    <div className={styles.input_container}>
      <input className={styles.input} {...props} />

      <div className='_icon-search'></div>
    </div>
  )
}
