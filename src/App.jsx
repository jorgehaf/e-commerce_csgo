import React, { useState, useEffect } from 'react';
import cartActions from "./store/actions/cart";
import { useSelector, useDispatch } from 'react-redux';

import {
  Route,
  Routes
} from 'react-router-dom'

import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import './App.scss'


const App = () => {
  const dispatch = useDispatch();

  const CartItems = useSelector(state => state)

  useEffect(() => {
    captureCart();
  }, [])

  function captureCart() {
    let temporyCart = JSON.parse(localStorage.getItem('Cart'))

    if (temporyCart) {
      dispatch(cartActions.UpdateCart(temporyCart))
    }
  }

  return (
    <div id='app'>
      <Header id="header" totalItems={CartItems.cart.totalItems} />
      <Routes id="routes">
        <Route path="/"
          element={
            <Home cart={CartItems.cart} />
          } />
        <Route path="/Cart"
          element={
            <Cart cart={CartItems.cart} />
          } />
      </Routes>
    </div>
  )
}

export default App;
