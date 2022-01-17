import React from 'react';
import style from "./Header.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Prefijo fas
import { faDog } from "@fortawesome/free-solid-svg-icons";
// Prefijo fab
import {faFacebook, faWhatsapp, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons"
// -----------------------------imagenes-----------------------------
import logo from "../../assets/images/logo.jpg"
import muzzarella from "../../assets/images/muzzarella.jpg"
import napolitana from "../../assets/images/napolitana.jpg"
import jamon from "../../assets/images/jamon.jpg"
import agua from "../../assets/images/agua.jpg"
import almendrado from "../../assets/images/almendrado.jpg"
import bombones from "../../assets/images/bombones.jpg"
import cerveza from "../../assets/images/cerveza.jpg"
import empanada_atun from "../../assets/images/empanada_atun.jpg"
import empanada_carne from "../../assets/images/empanada_carne.jpg"
import empanada_jamonyqueso from "../../assets/images/empanada_jamonyqueso.jpg"
import gaseosa from "../../assets/images/gaseosa.jpg"
import helado from "../../assets/images/helado.jpg"

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.titulos}>
                <nav>Inicio</nav>
                <nav>Sabores</nav>
                <nav>Eventos</nav>
                <nav>Sobre Nosotros</nav>
            </div>

            {/* <p>Mundo Pizza</p> */}

            <div className={style.iconos}>
                <FontAwesomeIcon icon={faTwitter}/>
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faInstagram}/>
                <FontAwesomeIcon icon={faWhatsapp}/>
            </div>
            {/* <img src={logo} alt=""  className={style.img} />
            <img src={jamon} alt=""  className={style.img} />
            <img src={muzzarella} alt=""  className={style.img} />
            <img src={napolitana} alt=""  className={style.img} />
            <img src={agua} alt=""  className={style.img} />
            <img src={almendrado} alt=""  className={style.img} />
            <img src={bombones} alt=""  className={style.img} />
            <img src={cerveza} alt=""  className={style.img} />
            <img src={empanada_atun} alt=""  className={style.img} />
            <img src={empanada_carne} alt=""  className={style.img} />
            <img src={empanada_jamonyqueso} alt=""  className={style.img} />
            <img src={gaseosa} alt=""  className={style.img} />
            <img src={helado} alt=""  className={style.img} /> */}

        </div>
        
    );
}

export default Header;
