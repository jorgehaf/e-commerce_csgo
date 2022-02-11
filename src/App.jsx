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
import './App.css'


const App = () => {
  const dispatch = useDispatch();

  const [localCart, setLocalCart] = useState({
    totalGunsPrice: 0,
    totalItems: 0,
    Cart: []
  })

  const CartItems = useSelector(state => state)

  useEffect(() => {
    if (CartItems.cart.Cart.length > 0) {
      setLocalCart(CartItems.cart)
    } else {
      let temporyCart = JSON.parse(localStorage.getItem('Cart'))

      if (temporyCart) {
        dispatch(cartActions.UpdateCart(temporyCart))

        setLocalCart(temporyCart)
      } else {
        setLocalCart(CartItems)
      }
    }
  }, [])

  return (
    <div id='app'>
      <Header id="header" totalItems={localCart.totalItems} />
      <Routes id="routes">
        <Route path="/"
          element={
            <Home cart={localCart} />
          } />
        <Route path="/Cart"
          element={
            <Cart cart={localCart} />
          } />
      </Routes>
    </div>
  )
}

export default App;
