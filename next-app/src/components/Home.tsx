import React from 'react'
import styles from '@/styles/Home.module.scss'
import Image from 'next/image'
import logo from '@/assets/logo.png'

const Home = () => {
  return (
    <main className={styles.main}>
      <h1>Hola soy douglas Fullstack developer</h1>
      <Image src={logo} alt='logo' width={200} />
    </main>
  )
}

export default Home