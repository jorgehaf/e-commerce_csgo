import React, { useState } from 'react'

import {
    Route,
    Routes
} from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path='/' element={
          <Home/>
        }/>
        <Route exact path='/carrinho' element={
          <Cart/>
        }/>
      </Routes>
    </>
  );
}

export default App;
