import React, { useState, useEffect } from 'react'
import { useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from "../../store/actions/cart";
import "./Cart.scss"

const Cart = () => {
    const [localCart, setLocalCart] = useState([])
    const CartItems = useSelector(state => state)
    const dispatch = useDispatch();
    console.log(CartItems)


    useLayoutEffect(() => {
        let temporyCart = JSON.parse(localStorage.getItem('cart'))
        temporyCart ? setLocalCart(...temporyCart) : setLocalCart([])
    }, [])

    return (
        <div className="main">
            {localCart}
        </div>
    )
}

export default Cart;