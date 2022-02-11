import React, { useState, useEffect } from 'react'
import axios from "axios";

import ItemVenda from '../ItemVenda/ItemVenda';
import services from "../../services"
import "./Home.scss"

const Home = () => {
    const [skins, setSkins] = useState([]);
    const [categoryArmy, setCategoryArmy] = useState(1);

    useEffect(() => {
        services.skins.getSkins()
            .then((suc) => {
                setSkins(suc)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    return (
        <div className="home">
            <nav id="nav">
                <div id='navBar'>
                    <div className='itemNav' onClick={() => setCategoryArmy(1)}>Rifles</div>
                    <div className='itemNav' onClick={() => setCategoryArmy(2)}>Pistolas</div>
                    <div className='itemNav' onClick={() => setCategoryArmy(3)}>SMG</div>
                </div>
            </nav>
            <ItemVenda array={skins} categoryArmy={categoryArmy} screen={'Home'} />
        </div>
    )
}

export default Home;