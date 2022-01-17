import React from 'react';
import style from './Main.module.css'
// -----------------------------imagenes-----------------------------
import pizza from "../../assets/images/pizza.svg"
import Carousel from '../carousel/Carousel';
import Products from '../products/Products';
import { Link } from 'react-router-dom';
const Main = () => {
    return (
        <div className={ style.mani}>
            <h1 className={style.titulo}> Mundo Pizza  </h1>            
            <img src={pizza} alt=""  className={style.pizza}/>
            <div className={style.pedidos}>  
 <Carousel /> 

            </div>
            <Products />
            <Link to="/comprar">
            <button className='btn btn-dark'>!Ordenar ahora!</button>
            </Link>
        </div>
    );
}
// 
export default Main;
