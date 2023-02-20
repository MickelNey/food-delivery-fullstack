import React from 'react'
import styles from './SearchInput.module.scss'

export const SearchInput = () => {
  return (
    <div className={styles.input_container}>
      <input className={styles.input} type="text" placeholder='Search...'/>

      <div className='_icon-search'></div>
    </div>
  )
}
