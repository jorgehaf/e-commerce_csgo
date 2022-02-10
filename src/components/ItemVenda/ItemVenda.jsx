import { useDispatch } from 'react-redux';
import cartActions from "../../store/actions/cart";
import "./ItemVenda.scss"

const ItemVenda = (props) => {
    const dispatch = useDispatch();

    return (
        <div id="collectionArmy">
            {
                props.screen === 'Home' ?
                    props.array.map(
                        (army) =>
                            props.categoryArmy === army.category &&
                            <div className='cardArmy' key={army.id}>
                                <div className="price">Price: {'$' + army.price}</div>
                                <div>
                                    <img src={army.image} alt={army.name} />
                                </div>
                                <div className="infosArmy">
                                    <div>{army.name}</div>
                                    <div>
                                        <button className="button" onClick={() => dispatch(cartActions.Add(props.array, army))}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                    )
                    :
                    <div className='collectionArmyCart'>{
                        props.array.map(
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

            }
        </div>
    )
}

export default ItemVenda;