import { useDispatch } from 'react-redux';
import cartActions from "../../store/actions/cart";
import "./ItemCart.scss"

const ItemCart = (props) => {
    const dispatch = useDispatch();

    return (
        <div className="collectionArmy">
            {
                props.cart.map(
                    (army) =>
                        <div className='cardArmyCart' key={army.id}>
                            <div className='infosArmy'>
                                <img src={army.image} alt={army.name} />
                                <div className='priceName'>
                                    <div className="price">Price: {'$' + army.totalGunPrice}</div>
                                    <div>
                                        <div>{army.name}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='controllerItem'>
                                <div className='controllerAmount'>
                                    <div className='itemController addItem' onClick={() => dispatch(cartActions.AddItem(props.array, army))}>+</div>
                                    <div className='itemController'>{army.amount}</div>
                                    <div className='itemController removeItem' onClick={() => dispatch(cartActions.RemoveItem(props.array, army))}>-</div>
                                </div>
                                <div className='deleteItem' onClick={() => dispatch(cartActions.DeleteItem(props.array, army))}>Delete</div>
                            </div>
                        </div>
                )}
        </div>
    )
}

export default ItemCart;