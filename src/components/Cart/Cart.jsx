import ItemCart from '../ItemCart/ItemCart';
import "./Cart.scss"

const Cart = (props) => {
    return (
        <div className="main">
            <ItemCart cart={props.cart} />
            <div id='subTotal'>Subtotal ({props.cart.totalItems} {props.cart.totalItems <= 1 ? 'item' : 'items'}): {'$' + props.cart.totalGunsPrice}
                {props.cart.totalGunsPrice > 0 && <button className='buttonFinally'>Close order</button>}</div>
        </div>
    )
}

export default Cart;