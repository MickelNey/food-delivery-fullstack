import styles from './Page.module.scss'
import React from 'react'

interface PageProps {
  children?: React.ReactNode;
  classname?: string;
}

export const Page = ({children, classname}: PageProps ) => {
  return (
    <div className={styles.page}>
      <div className={styles.container} >
        <main className={styles.main}>
          <div className={classname}>
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
