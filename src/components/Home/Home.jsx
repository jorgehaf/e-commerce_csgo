import React, { useState, useEffect } from 'react'

import services from "../../services"
import "./Home.scss"

const Home = () => {
    const numbers = [1, 2, 3, 4, 5];

    useEffect(() => {
        console.log(services.skins.getSkins())
        // services.skins.getSkins()
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
                    {numbers.map((number) => <div>{number}</div>)}
                </div>
            </main>
        </div>
    )
}

export default Home;