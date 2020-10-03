import React from 'react';
import './style.css';
import { Link, useHistory } from 'react-router-dom';
import logoBranca from '../../icons/logoBranca.png';

export default function App() {
  return (
    <div className="menu">   
     
        <ul>
        <img src={logoBranca} alt="some text" width='75' height='65' />

            <Link className="buttonMenu" to = "/">
                <li><a>Home</a></li>
            </Link>

            <Link className="buttonMenu" to = "/onlineStores">
                <li><a>Lojas virtuais</a></li>
            </Link>

            <li><a href="#">Ongs</a></li>
            <li><a href="#">Cadastrar loja</a></li>
            <Link className="buttonMenu" to = "/about">
                <li><a>Sobre</a></li>
            </Link>
            <li><a href="#">Contato</a></li>
        </ul>

        <div className="about">

            <h1>Sobre o Black Money Tracking:</h1>
            <p> 
                O site Black Money Tracking nasce como uma tentativa de empoderar negócios físicos e virtuais criados por pessoas pretas, 
                servindo como um banco de dados onde todas as lojas serão localizadas no mapa e/ou apresentadas com um breve resumo sobre em que
                área atuam e qual o seu tipo de produto. Além disso, Ongs de apoio a movimentos pretos estão listadas na página "ONGS" de forma 
                que os usuários podem ter acesso profundo a instituições de apoio a causa. O site não possui de forma alguma fins lucrativos e é 
                totalmente mantido e criado por alunos da UFCG (Universidade Federal de Campina Grande) como forma de levar os 
                conhecimentos adiquiridos na academia para a sociedade.
            </p>


            

        </div>
    </div>
    
    
  );
}

