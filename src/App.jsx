import { Route } from 'react-router-dom'
import { Routes } from "react-router-dom"
import Home from './pages/Home'
import NavBar from './components/shared/NavBar'
import { useSelector } from 'react-redux'

import HomeEn from './pagesEN/pages/HomeEn'
import NavBarEn from './components/shared/NavBarEn'
import ContactoModal from './components/contact/ContactoModal'
import ContactoModalEn from './components/contact/ContactoModalEn'




function App() {
  const headerColor = useSelector(state => state.headerColorSlice)
  const contacto = useSelector(state => state.contactoSlice)



  return (
    <div className={` w-full min-h-[100vh] ${headerColor} `}>

      <Routes>

        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<NavBarEn />}>

          <Route path="/homeEN" element={<HomeEn />} />
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
