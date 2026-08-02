import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Scrolltotop from './ScrolltoTop'
import Whatsapp from './Whatsapp'
import Home from './Homepage/Home'
import Footer from './Footer'
import About from './About'

import Classicpkg from './Umrahpkg/classicpkg'
import Deluxepkg from './Umrahpkg/Deluxepkg'
import Luxurypkg from './Umrahpkg/Luxurypkg'

import Allpackages from './Allpackages'

import Classichajj from './Hajjpkg/Classichajj'
import Deluxehajj from './Hajjpkg/Deluxehajj'
import Luxuryhajj from './Hajjpkg/Luxuryhajj'

import Ramadan15days from './Ramadanpkg/Ramadan15days'
import Ramadanlast20days from './Ramadanpkg/Ramadanlast20days'
import Ramadanfullmonth from './Ramadanpkg/Ramadanfullmonth'

import Visaservice from './Visaservice'
import Contact from './Contact'
import Privacy from './Privacy'
import TermsAndConditions from './TermsAndConditions'
const AllRoutes = () => {
  return (
    <div>
      <Router>


        <Scrolltotop />
        <Navbar />
        <Whatsapp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classicpkg" element={<Classicpkg />} />
          <Route path="/deluxepkg" element={<Deluxepkg />} />
          <Route path="/luxurypkg" element={<Luxurypkg />} />
          <Route path="/allpackages" element={<Allpackages />} />
          <Route path="/classichajj" element={<Classichajj />} />
          <Route path="/deluxehajj" element={<Deluxehajj />} />
          <Route path="/luxuryhajj" element={<Luxuryhajj />} />
          <Route path="/ramadan15days" element={<Ramadan15days />} />
          <Route path="/ramadanlast20days" element={<Ramadanlast20days />} />
          <Route path="/ramadanfullmonth" element={<Ramadanfullmonth />} />
          <Route path="/visaservice" element={<Visaservice />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
        </Routes>


        <Footer />
      </Router>
    </div>
  )
}

export default AllRoutes;