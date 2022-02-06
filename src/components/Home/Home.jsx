import React, { useState, useEffect } from 'react'
import axios from "axios";

import ItemVenda from '../ItemVenda/ItemVenda';
// import services from "../../services"
import "./Home.scss"

const Home = () => {
    const [skins, setSkins] = useState([]);

    useEffect(() => {
        const carregarSkins = async () => {
            const resposta = await axios.get("apiFake.json").then((suc) => { return suc.data }).catch((err) => { console.log(err) });

            setSkins(skins.concat(resposta.skins))
        }
        carregarSkins();
    }, []);

    return (
        <div className="home">
            <nav id="nav">
                <div id='navBar'>
                    <div className='itemNav'>Rifles</div>
                    <div className='itemNav'>Pistolas</div>
                    <div className='itemNav'>SMG</div>
                </div>
            </nav>
            <ItemVenda skins={skins}/>
        </div>
    )
}

export default Home;