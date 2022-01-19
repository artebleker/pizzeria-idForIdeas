import React, { useState, useEffect } from "react";
import mas from "../../assets/images/mas.svg";
import menos from "../../assets/images/menos.svg";
import style from "../products/products.module.css";
import {id} from "../products/Products.jsx"
 function Counter({id}) {
 
    const [contador,setContador] = useState(0);
    

useEffect(()=>{
  setContador(0)
},[])
const sumar = () => {
 if (contador < 12) {
   setContador(contador + 1);
 }
 console.log(pedido); 
};

const restar = () => {
 if (contador > 0) {
   setContador(contador - 1);
  }
  console.log(pedido); 
};

const pedido = 
 [contador, id]




    return (
  <>
<div className={style.btnCantidad}>
               <button onClick={sumar} ><img 
                  className={style.mas} src={mas} alt="" /></button> 
                <p>Cantidad:{contador}</p>
              <button onClick={restar}><img   
                  className={style.mas} src={menos} alt="" /></button>
              </div>
  </>
  );
}
export default Counter