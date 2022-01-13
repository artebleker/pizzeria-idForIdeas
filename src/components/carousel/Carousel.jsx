import React from 'react';
import muzzarella from "../../assets/images/muzzarella.jpg"
import almendrado from "../../assets/images/almendrado.jpg"
import empanada_jamonyqueso from "../../assets/images/empanada_jamonyqueso.jpg"
import gaseosa from "../../assets/images/gaseosa.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousel.module.css"


const Carousel = () => {
   
    return (
        <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <a href="#pizza"><img src={muzzarella} className="d-block w-100" alt="..." width= "400px" height= "400px"></img>
    </a>
    </div>
    <div className="carousel-item">
      <a href="#empanada"><img src={empanada_jamonyqueso} className="d-block w-100" alt="..." width= "400px" height= "400px"></img>
    </a>
    </div>
    <div className="carousel-item">
     <a href="#postre"> <img src={almendrado} className="d-block w-100" alt="..." width= "400px" height= "400px"></img>
    </a>
    </div>
    <div className="carousel-item">
     <a href="#bebida"> <img src={gaseosa} className="d-block w-100" alt="..." width= "400px" height= "400px"></img>
    </a>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );
}

export default Carousel;

      