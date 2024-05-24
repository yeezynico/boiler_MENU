import React from 'react'
import './index.scss'
import Nav from './components/nav/indexNAV';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Restaurants from './components/nav/restaurants';
import Log from './components/nav/log';
import Home from './pages/home/home';
import Footer from './components/footer/footer';
import Concept from './components/footer/concept';
import Contact from './components/footer/contact';
import Team from './components/footer/team';
import Details from './pages/RESTAURANT/details';




function App() {


  return (
    <>
      < BrowserRouter>
        <header>
          <Nav />
        </header>
        <Routes >
          {/* routes NAV */}
          <Route path='/' element={<Home />} />
          <Route path='/restaurants' element={<Restaurants />} />
          <Route path='/log' element={<Log />} />
          {/* routes Footer */}
          <Route path='/concept' element={<Concept />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/team' element={<Team />} />
          <Route path='/team' element={<Team />} />
          {/* routes restaurants_details */}
          <Route path='/details' element={<Details />} />

        </Routes>
        <footer>
          <Footer />

        </footer>

      </BrowserRouter>
    </>
  )
}

export default App
