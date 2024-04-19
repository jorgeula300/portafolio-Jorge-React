import { Route } from 'react-router-dom'
import { Routes } from "react-router-dom"
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import NavBar from './components/shared/NavBar'
import { useSelector } from 'react-redux'
import Skills from './pages/Skills'
import PorfolioPage from './pages/PorfolioPage'
import ContactoModal from './components/contact/ContactoModal'




function App() {
  const headerColor = useSelector(state => state.headerColorSlice)
  const contacto = useSelector(state => state.contactoSlice)


  return (
    <div className={` w-full min-h-[100vh] ${headerColor} `}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/porfolio" element={<PorfolioPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      {
        contacto ? <ContactoModal /> : null
      }
    </div>

  )
}

export default App
