import Link from 'next/link'
import React from 'react'

const about = () => {
  return (
    <div>
      <h1>Estas en About</h1>
      <Link href={'/'}>
        <button type='submit' style={{
          backgroundColor: '#ff9249',
          padding: '1em',
          borderRadius: '10px',
          cursor: 'pointer',
          border: 'none'
        }}
        >Ir Home</button>
      </Link>
    </div>
  )
}

export default about