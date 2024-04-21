import { Route } from 'react-router-dom'
import { Routes } from "react-router-dom"
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import NavBar from './components/shared/NavBar'
import { useSelector } from 'react-redux'
import Skills from './pages/Skills'
import PorfolioPage from './pages/PorfolioPage'
import ContactoModal from './components/contact/ContactoModal'
import HomeEn from './pagesEN/pages/HomeEn'
import NavBarEn from './components/shared/NavBarEn'
import AboutPageEn from './pagesEN/pages/AboutPageEn'
import SkillsEn from './pagesEN/pages/SkillsEn'
import PorfolioPageEn from './pagesEN/pages/PorfolioPageEn'
import ContactoModalEn from './components/contact/ContactoModalEn'




function App() {
  const headerColor = useSelector(state => state.headerColorSlice)
  const contacto = useSelector(state => state.contactoSlice)



  return (
    <div className={` w-full min-h-[100vh] ${headerColor} `}>

      <Routes>

        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/porfolio" element={<PorfolioPage />} />

        </Route>

        <Route element={<NavBarEn />}>

          <Route path="/homeEN" element={<HomeEn />} />
          <Route path="/aboutEN" element={<AboutPageEn />} />
          <Route path="/skillsEN" element={<SkillsEn />} />
          <Route path="/porfolioEN" element={<PorfolioPageEn />} />


        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      {
        contacto.idioma === "es" ? <ContactoModal /> : null
      }
      {
        contacto.idioma === "en" ? <ContactoModalEn /> : null
      }
    </div>

  )
}

export default App
