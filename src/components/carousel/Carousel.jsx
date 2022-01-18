import React from 'react';
import "./Carousel.module.css"
//IMAGENES
import muzzarella from "../../assets/images/muzzarella.jpg"
import napolitana from "../../assets/images/napolitana.jpg"
import jamon from "../../assets/images/jamon.jpg"
import empanada_jamonyqueso from "../../assets/images/empanada_jamonyqueso.jpg"
import empanada_carne from "../../assets/images/empanada_carne.jpg"
import empanada_atun from "../../assets/images/empanada_atun.jpg"

import style from "./Carousel.module.css"

// const {btnDerJaime} = style


const Carousel = () => {
   
    return (
<div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
    
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
    </div>

    <div className="carousel-inner">

      <div className="carousel-item active">
          <a href="#pizza Muzzarella">
            <div  className={style.pedidos}>
              <div className={style.peri} >
                    <h3>Muzzarella</h3>
                    <span>$25</span>
                    <p id={style.text}>Esta variedad de pizza la puedes degustar con tu familia y amigos, sus ingredientes son queso , aceitunas salsas y demàs que dejar+an e tu paladar el sabor que nos identifica</p>
              </div>
              <img className={style.img2} src={muzzarella} alt="ghgh" />
            </div>
          </a>  
            
      </div>

      <div className="carousel-item">
          <a href="#Pizza napolitana">
          <div  className={style.pedidos}>
              <div className={style.peri} >
                    <h3>Napolitana</h3>
                    <span>$30</span>
                    <p className={style.text}>Esta variedad de pizza la puedes degustar con tu familia y amigos, sus ingredientes son queso , aceitunas salsas y demàs que dejar+an e tu paladar el sabor que nos identifica</p>
              </div>
              <img className={style.img2} src={napolitana} alt="ghgh" />
            </div>
          </a>
      </div>

      <div className="carousel-item">
          <a href="#postre"> 
          <div  className={style.pedidos}>
              <div className={style.peri} >
                    <h3>Jamón y Morrón</h3>
                    <span>$40</span>
                    <p className={style.text}>Esta variedad de pizza la puedes degustar con tu familia y amigos, sus ingredientes son queso , aceitunas salsas y demàs que dejar+an e tu paladar el sabor que nos identifica</p>
              </div>
              <img className={style.img2} src={jamon} alt="ghgh" />
            </div>
          </a>
      </div>

      <div className="carousel-item">
          <a href="#bebida"> 
          <div  className={style.pedidos}>
              <div className={style.peri} >
                    <h3>Empanada Jamon Y Queso</h3>
                    <span>$5</span>
                    <p className={style.text}>Esta variedad de pizza la puedes degustar con tu familia y amigos, sus ingredientes son queso , aceitunas salsas y demàs que dejar+an e tu paladar el sabor que nos identifica</p>
              </div>
              <img className={style.img2} src={empanada_jamonyqueso} alt="ghgh" />
            </div>
          </a>
      </div>

      <div className="carousel-item">
          <a href="#bebida"> 
          <div  className={style.pedidos}>
              <div className={style.peri} >
                    <h3>Empanada Carne</h3>
                    <span>$6</span>
                    <p className={style.text}>Esta variedad de pizza la puedes degustar con tu familia y amigos, sus ingredientes son queso , aceitunas salsas y demàs que dejar+an e tu paladar el sabor que nos identifica</p>
              </div>
              <img className={style.img2} src={empanada_carne} alt="ghgh" />
            </div>
          </a>
      </div>


      <div className="carousel-item">
          <a href="#bebida"> 
          <div  className={style.pedidos}>
              <div className={style.peri} >
                    <h3>Empanada Atun</h3>
                    <span>$5</span>
                    <p className={style.text}>Esta variedad de pizza la puedes degustar con tu familia y amigos, sus ingredientes son queso , aceitunas salsas y demàs que dejar+an e tu paladar el sabor que nos identifica</p>
              </div>
              <img className={style.img2} src={empanada_atun} alt="ghgh" />
            </div>
          </a>
      </div>

    </div>

      <button className="carousel-control-prev" id={style.btnDerJaime} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" id={style.btnIzqJaime} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
</div>
    );
}

export default Carousel;

      