import React, { useState, useEffect } from 'react';
import cartActions from "./store/actions/cart";
import { Provider, useSelector, useDispatch } from 'react-redux';

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

  const [localCart, setLocalCart] = useState([])
  const [totalGunsPrice, setTotalGunsPrice] = useState(0)

  const CartItems = useSelector(state => state)

  useEffect(() => {
    console.log('useEffect')
    if (CartItems.cart.Cart.length > 0) {
      setLocalCart(CartItems.cart.Cart)
      setTotalGunsPrice(CartItems.cart.totalGunsPrice)
    } else {
      let temporyCart = JSON.parse(localStorage.getItem('Cart'))

      if (temporyCart) {
        dispatch(cartActions.UpdateCart(temporyCart))

        setLocalCart(temporyCart.Cart)
        setTotalGunsPrice(temporyCart.totalGunsPrice)
      }
    }
  }, [])

  return (
    <div id='app'>
      <Header id="header" />
      <Routes id="routes">
        <Route path="/"
          element={
            <Home />
          } />
        <Route path="/Cart"
          element={
            <Cart />
          } />
      </Routes>
    </div>
  )
}

export default App;
