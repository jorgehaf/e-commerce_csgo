import { useSelector, useDispatch } from 'react-redux';
import cartActions from "../../store/actions/cart";
import "./ItemVenda.scss" 

const ItemVenda = (props) => {
    const cart = useSelector(state => state.cart.value)
    const dispatch = useDispatch();

    return (
        <div id="collectionArmy">
            {props.skins.map((army) =>
                props.categoryArmy === army.category &&
                <div className='cardArmy' key={army.id}>
                    <div className="price">Price: {'$' + army.price}</div>
                    <div>
                        <img src={army.image} alt={army.name} />
                    </div>
                    <div className="infosArmy">
                        <div>{army.name}</div>
                        <div>
                            <button className="button" onClick={() => dispatch(cartActions.Add(cart, army))}>Add to cart</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ItemVenda;