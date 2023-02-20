import React from 'react'
import styles from './Modal.module.scss'

interface IModal {
  setActive: React.Dispatch<React.SetStateAction<boolean>>,
  active: boolean,
  clearFunc?: () => void,
  children?: React.ReactNode
}

export const Modal = ({ 
  active, 
  setActive, 
  children, 
  clearFunc = () => { return 0 }
}: IModal) => {
  return (
    <div className={`${active ? styles.modal_active: ''} ${styles.modal}`} 
      onClick={() => {
        setActive(false)
        clearFunc()
      }}>

      <form className={styles.container} onClick={(e) => e.stopPropagation()}>
        {children}
      </form>

    </div>
  )
}
