import React, { useState, useEffect } from 'react'

import ItemCart from '../ItemCart/ItemCart';
import "./Cart.scss"

const Cart = (props) => {
    return (
        <div className="main">
            <ItemCart cart={props.cart} />
            {/* <div>Subtotal ({props.totalItems} {props.totalItems <= 1 ? 'item' : 'itens'}): {'$' + props.totalGunsPrice}
                {props.totalGunsPrice > 0 && <button className='buttonFinally'>Close order</button>}</div> */}
        </div>
    )
}

export default Cart;