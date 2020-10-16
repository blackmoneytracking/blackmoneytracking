import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
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

            <Link className="buttonMenu" to = "/ongs">
                <li><a href="#">Ongs</a></li>
            </Link>
            
            <li><a href="#">Cadastrar loja</a></li>

            <Link className="buttonMenu" to = "/about">
                <li><a>Sobre</a></li>
            </Link>
            <Link className="buttonMenu" to = "/contact">
                <li><a>Contato</a></li>
            </Link>
        </ul>

        <div className="lojas-virtuais">
            <title>Lojas Virtuais</title>
            <ol>
                <li><a href="https://xongani.com/">XONGANI</a></li>
                <p>Fundada pela produtora Cris Mendonça e pela designer e estilista Ana Paula Xongani, a loja Xongani produz moda afro de qualidade por meio peças diversas, 
                    como vestidos, biquínis, sungas, bermudas e saídas de praia, além de peças sob medida para eventos. O propósito da Xongani é dar visibilidade à estética negra, 
                    e as peças contam com estampas maravilhosas, cheias de cor e energia. 
                    (link do texto: <a href="https://www.almanaquesos.com/20-marcas-de-roupa-de-gente-preta-indicadas-por-quem-mais-entende-do-assunto/)">almanaquesos.</a>)
                </p>
                <li><a href="http://www.baobabrasil.iluria.com/produtos-ct-177cbb">MARIA CHANTAL</a></li>
                <p>A Baobá Brasil foi criada por Tenka Dara Pinho, graduada em Artes Cênicas e Comunicação, e atuante no mercado da moda desde sua visita à Moçambique, no ano de 2005, quando ela trouxe capulanas ao Brasil para produzir suas peças.

                Com este tecido, que conta com estampas africanas e tem sido amplamente utilizado por mulheres negras, a Baobá Brasil tem produzido vestidos, calças, blusas, entre outras peças com um visual colorido e vibrante. 
                (link do texto: <a href="https://www.almanaquesos.com/20-marcas-de-roupa-de-gente-preta-indicadas-por-quem-mais-entende-do-assunto/)">almanaquesos.</a>)
                </p>
                <li><a href="https://www.isaacsilva.com.br/">ISAAC SILVA</a></li>
                <p>Isaac Silva é um estilista baiano que mora em São Paulo e criou sua marca de moda feminina que oferece roupas confortáveis e com excelente acabamento, além de um visual leve e glamouroso para as mulheres que as utilizam.
                    (link do texto: <a href="https://www.almanaquesos.com/20-marcas-de-roupa-de-gente-preta-indicadas-por-quem-mais-entende-do-assunto/)">almanaquesos.</a>)
                </p>

            </ol>
            

        </div>
    </div>
    
    
  );
}

