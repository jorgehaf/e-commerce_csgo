import React, { useState, useEffect } from 'react'
import axios from "axios";

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
        <div className="main">
            <nav>
                <ul>
                    <li>Rifles</li>
                    <li>Pistolas</li>
                    <li>SMG</li>
                </ul>
            </nav>
            <main>
                <div>
                    {skins.map((army) => 
                        <div key={army.id}>{army.name}{army.price}</div>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Home;