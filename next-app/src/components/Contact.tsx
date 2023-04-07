import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Contact.module.scss'

const Contact = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>

        <h1 className={styles.footer__logo}>Douglas San Anton Bianchi</h1>

        <div className={styles.footer__menu}>
          <Link href="#" className={styles.footer__item}>LinkedIn</Link>
          <Link href="#" className={styles.footer__item}>Correo</Link>
        </div>

      </div>
    </footer>
  )
}

export default Contact