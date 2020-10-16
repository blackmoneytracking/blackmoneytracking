import React from 'react';
import './style.css';

import logoBranca from '../../icons/logoBranca.png';
import { Link } from 'react-router-dom';

export default function Ongs(){
    return(

        <div>
            <h1>ONGs</h1>

        <div className="menu">   
        <ul>
        <img src={logoBranca} alt="some text" width='75' height='65' />
            <Link className="buttonMenu" to = "/">
                <li><a>Home</a></li>
            </Link>

            <Link className="buttonMenu" to = "/onlineStores">
                <li><a>Lojas virtuais</a></li>
            </Link>

            <Link className="buttonMenu" to = "/ongs">
                <li><a href="#">Ongs</a></li>
            </Link>
            <Link className="buttonMenu" to = "/register">
                <li><a>Cadastrar loja</a></li>
            </Link>
            <Link className="buttonMenu" to = "/about">
                <li><a>Sobre</a></li>
            </Link>
            <Link className="buttonMenu" to = "/contact">
                <li><a>Contato</a></li>
            </Link>
        </ul>

        <div className="ongs">


            <h1>Ongs:</h1>
            <p> 
                Not yet implemented!
            </p>
        </div>
    </div>
    );
}