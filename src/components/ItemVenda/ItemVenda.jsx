import { useDispatch } from 'react-redux';
import cartActions from "../../store/actions/cart";
import "./ItemVenda.scss"

const ItemVenda = (props) => {
    const dispatch = useDispatch();

    return (
        <div id="collectionArmy">
            {
                props.arraySkins.map(
                    (army) =>
                        props.categoryArmy === army.category &&
                        <div className='cardArmy' key={army.id}>
                            <div className="price">Price: {'$' + army.price}</div>
                            <img src={army.image} alt={army.name} />
                            <div className="infosArmy">
                                <div>{army.name}</div>
                                <div>
                                    <button className="button" onClick={() => dispatch(cartActions.Add(props.cart, army))}>Add to cart</button>
                                </div>
                            </div>
                        </div>
                )
            }
        </div>
    )
}

export default ItemVenda;