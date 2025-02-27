import Lenis from 'lenis'
import Footer from "./Components/Footer.jsx"
import Navbar from "./Components/Header.jsx"
import { Outlet } from 'react-router'

const App = () => {

  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App