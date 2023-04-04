import React from 'react'
import styles from '@/styles/Navbar.module.scss'
import menu from '@/assets/menu.svg'
import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className={styles.nav}>

      <div className={styles.nav__container}>

        <h1 className={styles.nav__logo}>Dusandev</h1>

        <label htmlFor="menu" className={styles.nav__label}>
          <Image src={menu} alt="icon" className={styles.nav__img} />
        </label>
        <input type="checkbox" id="menu" className={styles.nav__input} />

        <div className={styles.nav__menu}>
          <Link href="#" className={styles.nav__item}>Home</Link>
          <Link href="#" className={styles.nav__item}>About</Link>
          <Link href="#" className={styles.nav__item}>Skills</Link>
          <Link href="#" className={styles.nav__item}>Work</Link>
          <Link href="#" className={styles.nav__item}>Contact</Link>
        </div>

      </div>

    </nav>
  )
}
