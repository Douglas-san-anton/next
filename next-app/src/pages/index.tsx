import styles from '@/styles/HomePage.module.css'
import Link from 'next/link'

function HomePage() {
  return (
    <main>
      <h1>Estas en Home</h1>
      <Link href={'/about'}>
        <button type='submit' style={{
          backgroundColor: '#009249',
          padding: '1em',
          borderRadius: '10px',
          cursor: 'pointer',
          border: 'none'
        }}>
          Ir About</button></Link>

    </main>
  )
}

export default HomePage