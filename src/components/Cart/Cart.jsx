import React, { useState, useEffect } from 'react'
import cartActions from "../../store/actions/cart";
import { useSelector, useDispatch } from 'react-redux';

import ItemVenda from '../ItemVenda/ItemVenda';
import "./Cart.scss"

const Cart = () => {
    const dispatch = useDispatch();

    const [localCart, setLocalCart] = useState([])
    const [totalGunsPrice, setTotalGunsPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)

    const CartItems = useSelector(state => state)

    useEffect(() => {
        if (CartItems.cart.Cart.length > 0) {
            setLocalCart(CartItems.cart.Cart)
        } else {
            let temporyCart = JSON.parse(localStorage.getItem('Cart'))

            dispatch(cartActions.UpdateCart(temporyCart))

            setLocalCart(temporyCart.Cart)
            setTotalGunsPrice(temporyCart.totalGunsPrice)
        }
    }, [])

    return (
        <div className="main">
            <ItemVenda array={localCart} screen={'Cart'} />
            <div>Subtotal ({totalItems} {totalItems <= 1 ? 'item' : 'itens'}): {
                CartItems.cart.Cart.length > 0 ?
                    CartItems.cart.totalGunsPrice : totalGunsPrice
            }</div>
        </div>
    )
}

export default Cart;