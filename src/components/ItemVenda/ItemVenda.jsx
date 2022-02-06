import "./ItemVenda.scss"

const itemVenda = (props) => {
    return (
        <div id="collectionArmy">
            {props.skins.map((army) =>
                <div className='cardArmy' key={army.id}>
                    <div className="price">Price: {'$' + army.price}</div>
                    <div>
                        <img src={army.image} alt={army.name} />
                    </div>
                    <div className="infosArmy">
                        <div>{army.name}</div>
                        <div>
                            <button className="button">Adicionar ao carrinho</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default itemVenda;