import React from 'react';
import './style.css';
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps";
import logoBranca from '../../icons/logoBranca.png';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

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
            <li><a href="#">Ongs</a></li>
            <li><a href="#">Cadastrar loja</a></li>
            <Link className="buttonMenu" to = "/about">
                <li><a>Sobre</a></li>
            </Link>
            <li><a href="#">Contato</a></li>
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

