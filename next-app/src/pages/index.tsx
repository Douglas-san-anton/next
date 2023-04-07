import Contact from '@/components/Contact'
import Home from '@/components/Home'
import { Navbar } from '@/components/Navbar'

function HomePage() {
  return (
    <main>
      <Navbar />
      <Home />
      <Contact />
    </main>
  )
}

export default HomePage