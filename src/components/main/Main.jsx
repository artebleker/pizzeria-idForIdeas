import React from 'react';
import style from './Main.module.css'
// -----------------------------imagenes-----------------------------
import pizza from "../../assets/images/pizza.svg"
import Carousel from '../carousel/Carousel';
import Products from '../products/Products';
import ComprarBtn from '../comprarBtn/comprarBtn';

const Main = () => {
    return (<>
    <ComprarBtn/>
        <div className={ style.mani}>
            <h1 className={style.titulo}> Mundo Pizza  </h1>            
            <img src={pizza} alt=""  className={style.pizza}/>
            
            <div className={style.pedidos}>  
                <Carousel /> 
            </div>
            
            <Products />
    
        </div>
        </>
    );
}

export default Main;
