import styles from '@/styles/HomePage.module.css'
import Image from 'next/image'
import Link from 'next/link'
import menu from '@/assets/menu.svg'

function HomePage() {
  return (
    <main>
      <nav className={styles.nav}>
        <div className={styles.nav__container}>
          <h1 className={styles.nav__logo}>Dusandev</h1>
          {/* <input value={search} onChange={searcher} type="text" placeholder='Buscar' className={styles.search} /> */}

          <label htmlFor="menu" className={styles.nav__label}>
            <Image src={menu} alt="icon" className={styles.nav__img} />
          </label>
          <input type="checkbox" id="menu" className={styles.nav__input} />

        </div>
      </nav>

    </main>
  )
}

export default HomePage