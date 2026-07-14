import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import MobileCtaBar from '../ui/MobileCtaBar'

export default function RootLayout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Header />
      <main role="main">
        <Outlet />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  )
}
