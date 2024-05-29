import React from 'react'
import './index.scss'
import Nav from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Restaurants from './pages/restaurant/listeRestaurants';
import Log from './pages/forms/login';
import Sign from './pages/forms/signup';
import Edit from './pages/forms/edit';
import Home from './pages/home/home';
import Footer from './components/footer';
import Concept from './pages/footer/concept';
import Team from './pages/footer/team';
import Contact from './pages/footer/contact';
import Details from './pages/restaurant/detailsRestaurant';
import { useState } from 'react';



function App() {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleTheme = () => {
    setIsNightMode(!isNightMode);
    const html = document.getElementsByTagName('html')[0];
    html.classList.toggle('nuit');
  };

  return (
    <>
      <BrowserRouter>
        <header>
          <Nav isNightMode={isNightMode} toggleTheme={toggleTheme} />
        </header>

        <Routes>
          {/* routes NAV */}
          <Route path='/restaurants' element={<Restaurants />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Log />} />
          <Route path='/signup' element={<Sign />} />
          {/* routes Footer */}
          <Route path='/concept' element={<Concept />} />
          <Route path='/team' element={<Team />} />
          <Route path='/contact' element={<Contact />} />
          {/* routes detailsRestaurant */}
          <Route path='/details' element={<Details />} />
          {/* route edit profile */}
          <Route path='/edit' element={<Edit />} />
        </Routes>

        <footer>
          <Footer isNightMode={isNightMode} />
        </footer>
      </BrowserRouter>
    </>
  )
}

export default App;
