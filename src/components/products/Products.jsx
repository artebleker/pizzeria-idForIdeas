import React from "react";
import style from "./products.css";
// -----------------------------imagenes-----------------------------
import muzzarella from "../../assets/images/muzzarella.jpg";
import napolitana from "../../assets/images/napolitana.jpg";
import jamon from "../../assets/images/jamon.jpg";
import agua from "../../assets/images/agua.jpg";
import almendrado from "../../assets/images/almendrado.jpg";
import bombones from "../../assets/images/bombones.jpg";
import cerveza from "../../assets/images/cerveza.jpg";
import empanada_atun from "../../assets/images/empanada_atun.jpg";
import empanada_carne from "../../assets/images/empanada_carne.jpg";
import empanada_jamonyqueso from "../../assets/images/empanada_jamonyqueso.jpg";
import gaseosa from "../../assets/images/gaseosa.jpg";
import helado from "../../assets/images/helado.jpg";

const Products = () => {
  const pedidosData = [
    {
      id: 1,
      imagen: `${muzzarella}`,
      producto: "pizza",
      nombre: "muzzarella",
      precio: "$25",
      parrafo:
        " Esta variedad de pizza la puedes degustar con tu familia y amigos, sus ingredientes son queso , aceitunas salsas y demàs que dejar+an e tu paladar el sabor que nos identifica",
    },
    {
      id: 2,
      imagen: `${napolitana}`,
      producto: "pizza",
      nombre: "Napolitana",
      precio: "$30",
      parrafo:
        " Esta variedad de pizza la puedes degustar con tu familia y amigos, sus ingredientes son queso , aceitunas salsas y demàs que dejar+an e tu paladar el sabor que nos identifica",
    },
    {
      id: 3,
      imagen: `${jamon}`,
      producto: "pizza",
      nombre: "Jamon y Morron",
      precio: "$40",
      parrafo:
        " Esta variedad de pizza la puedes degustar con tu familia y amigos, sus ingredientes son queso , aceitunas salsas y demàs que dejar+an e tu paladar el sabor que nos identifica",
    },
    {
      id: 4,
      imagen: `${empanada_jamonyqueso}`,
      producto: "empanada",
      nombre: "Empanada Jamon Y Queso",
      precio: "$5",
      parrafo:
        " Esta variedad de pizza la puedes degustar con tu familia y amigos, sus ingredientes son queso , aceitunas salsas y demàs que dejar+an e tu paladar el sabor que nos identifica",
    },
    {
      id: 5,
      imagen: `${empanada_carne}`,
      producto: "empanada",
      nombre: "Empanada Carne",
      precio: "$6",
      parrafo:
        " Esta variedad de pizza la puedes degustar con tu familia y amigos, sus ingredientes son queso , aceitunas salsas y demàs que dejar+an e tu paladar el sabor que nos identifica",
    },
    {
      id: 6,
      imagen: `${empanada_atun}`,
      producto: "empanada",
      nombre: "Empanada Atun",
      precio: "$5",
      parrafo:
        " Esta variedad de pizza la puedes degustar con tu familia y amigos, sus ingredientes son queso , aceitunas salsas y demàs que dejar+an e tu paladar el sabor que nos identifica",
    },
    {
      id: 7,
      imagen: `${cerveza}`,
      producto: "bebida",
      nombre: "Cerveza ",
      precio: "$10",
      parrafo:
        " Esta variedad de pizza la puedes degustar con tu familia y amigos, sus ingredientes son queso , aceitunas salsas y demàs que dejar+an e tu paladar el sabor que nos identifica",
    },
    {
      id: 8,
      imagen: `${bombones}`,
      producto: "postre",
      nombre: "Bombones ",
      precio: "$20",
      parrafo:
        " Esta variedad de pizza la puedes degustar con tu familia y amigos, sus ingredientes son queso , aceitunas salsas y demàs que dejar+an e tu paladar el sabor que nos identifica",
    },
    {
      id: 9,
      imagen: `${almendrado}`,
      producto: "postre",
      nombre: "Almendrado ",
      precio: "$15",
      parrafo:
        " Esta variedad de pizza la puedes degustar con tu familia y amigos, sus ingredientes son queso , aceitunas salsas y demàs que dejar+an e tu paladar el sabor que nos identifica",
    },
    {
      id: 10,
      imagen: `${helado}`,
      producto: "postre",
      nombre: "Helado ",
      precio: "$10",
      parrafo:
        " Esta variedad de pizza la puedes degustar con tu familia y amigos, sus ingredientes son queso , aceitunas salsas y demàs que dejar+an e tu paladar el sabor que nos identifica",
    },
    {
      id: 11,
      imagen: `${gaseosa}`,
      producto: "bebida",
      nombre: "Gaseosa ",
      precio: "$8",
      parrafo:
        " Esta variedad de pizza la puedes degustar con tu familia y amigos, sus ingredientes son queso , aceitunas salsas y demàs que dejar+an e tu paladar el sabor que nos identifica",
    },
    {
      id: 12,
      imagen: `${agua}`,
      producto: "bebida",
      nombre: "Agua ",
      precio: "$4",
      parrafo:
        " Esta variedad de pizza la puedes degustar con tu familia y amigos, sus ingredientes son queso , aceitunas salsas y demàs que dejar+an e tu paladar el sabor que nos identifica",
    },
  ];

  const pizza = pedidosData.filter((producto) => producto.producto == "pizza");
  const empanada = pedidosData.filter(
    (producto) => producto.producto == "empanada"
  );
  const postre = pedidosData.filter(
    (producto) => producto.producto == "postre"
  );
  const bebida = pedidosData.filter(
    (producto) => producto.producto == "bebida"
  );

  return (
    <>
      <div id="pizza">
          <h2>Pizzas</h2>
        {
            pizza.map((pedido) => {
                return(
                    <div key={pedido.id} className={style.pedidos}>
              <div className={style.peri}>
                <h3>{pedido.nombre}</h3>
                <span>{pedido.precio}</span>
                <p className={style.text}>{pedido.parrafo}</p>
              </div>
              <img className={style.img2} src={pedido.imagen} alt="ghgh" />
            </div>
          )
        })}
      </div>
      <div id="empanada">
          <h2>Empanadas</h2>
        {
            empanada.map((pedido) => {
                return(
                    <div key={pedido.id} className={style.pedidos}>
              <div className={style.peri}>
                <h3>{pedido.nombre}</h3>
                <span>{pedido.precio}</span>
                <p className={style.text}>{pedido.parrafo}</p>
              </div>
              <img className={style.img2} src={pedido.imagen} alt="ghgh" />
            </div>
          )
        })}
      </div>
      <div id="postre">
        <h2>Postres</h2>
        {
            postre.map((pedido) => {
                return(
                    <div key={pedido.id} className={style.pedidos}>
              <div className={style.peri}>
                <h3>{pedido.nombre}</h3>
                <span>{pedido.precio}</span>
                <p className={style.text}>{pedido.parrafo}</p>
              </div>
              <img className={style.img2} src={pedido.imagen} alt="ghgh" />
            </div>
          )
        })}
      </div>
      <div id="bebida">
          <h2>Bebidas</h2>
        {
        bebida.map((pedido) => {
          return(
            <div key={pedido.id} className={style.pedidos}>
              <div className={style.peri}>
                <h3>{pedido.nombre}</h3>
                <span>{pedido.precio}</span>
                <p className={style.text}>{pedido.parrafo}</p>
              </div>
              <img className={style.img2} src={pedido.imagen} alt="ghgh" />
            </div>
          )
        })}
      </div>
    </>
  );
};

export default Products;

//  <div id="pizza">
//     {
//       pedidosData.map((pedido)=>{
//           return(
//               <div key={pedido.id} className={style.pedidos}>
//                   <div className={style.peri} >
//                         <h3>{pedido.nombre}</h3>
//                         <span>{pedido.precio}</span>
//                         <p className={style.text}>{pedido.parrafo}</p>
//                     </div>
//                     <img className={style.img2} src={pedido.imagen} alt="ghgh" />
//               </div>
//           )})
//     }
// </div>
