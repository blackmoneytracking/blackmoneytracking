import React from 'react';
import './style.css';
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";
import logoBranca from '../../icons/logoBranca.png';
import { Link } from 'react-router-dom';

function Map(){
    return (
        <GoogleMap 
            defaultZoom={15} 
            defaultCenter={{lat: -7.214807, lng: -35.908444}}
        />

    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));


export default function App() {
  return (
    <div className="menu">
      <header>
      </header>


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

        <div className="map">
            <WrappedMap
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100vh` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    </div>
    
    
  );
}

