import React , {useState, useContext}from 'react';
import { Link } from 'react-router-dom';
import style from "../../App.module.css"
import { CartProductContext } from '../cart/CartProductContext';

const {comprar}=style
 function ComprarBtn() {

const onAdd =()=>{
  // DECLARADO EN COUNTER
}
  return (
  <>
  <Link to="/comprar">
      <button onClick={onAdd} className={comprar}>!Ordenar ahora!</button>
    </Link>
  </>
  );
}
export default ComprarBtn
