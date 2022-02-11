import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import homeActions from "../../store/actions/home";
import { useDispatch } from 'react-redux';

import ItemVenda from '../ItemVenda/ItemVenda';
import services from "../../services"
import "./Home.scss"

const Home = (props) => {
    const [skins, setSkins] = useState([]);
    const [categoryArmy, setCategoryArmy] = useState(1);

    const dispatch = useDispatch();
    const displayHamnurger = useSelector(state => state)

    async function getSkins() {
        let resp = await services.skins.getSkins()
        setSkins(resp)
        return resp;
    }

    function actionClickItemNav(categoryArmy) {
        setCategoryArmy(categoryArmy)
        dispatch(homeActions.displayHamburger())
    }

    useEffect(() => {
        getSkins();
    }, []);

    return (
        <div className="home">
            {displayHamnurger.home.displayHamburger &&
                <nav id="nav">
                    <div id='navBar'>
                        <div className='itemNav' onClick={() => actionClickItemNav(1)}>Rifles</div>
                        <div className='itemNav' onClick={() => actionClickItemNav(2)}>Pistolas</div>
                        <div className='itemNav' onClick={() => actionClickItemNav(3)}>SMG</div>
                    </div>
                </nav>
            }
            <ItemVenda arraySkins={skins} cart={props.cart} categoryArmy={categoryArmy} />
        </div>
    )
}

export default Home;