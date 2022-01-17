import React, {useContext} from 'react'
import "./cartProducts.css"
import {CartProductContext} from "./CartProductContext"
import { Link } from "react-router-dom";
 function CartProducts() {
const context = useContext(CartProductContext)


    return (
        <>
            <article className="container container-fluid">
                <h1>Productos elegidos</h1>
                    {
                        context.cartProduct.length >0 ?
                        context.cartProduct.map((product)=>(
                            <>                            
                            <section className="container container-fluid" key={product.id}>
                                <img src={product.img} alt={product.name}/>
                                <div>
                                <h3 title={product.name}> {product.name}</h3>
                                <span>{product.amount} x ${product.price} = <p>{context.totalPerProduct(product.id)}</p></span>
                                </div>
                                <button className="btn btn-danger btn-sm" onClick={() => product.deleteProduct(product.id)} >
                                   X </button>
                            </section>
                            
                            </>

                        ))
                        :(
                        <>
                        <h2 className="fs-4">No hay nada en el carrito</h2>
                        <Link to="/">
              <button className="btn btn-primary">Volver</button>
            </Link>
            </>
                        )
                    }
                    {context.cartProduct.length >0 &&(
                        <section className="container container-fluid" key="total">
                                <span>
                                <h2>TOTAL </h2>
                                <h3>$ {context.total()}</h3>
                                </span>

                                <Link to="/final">
            <button className="btn btn-success btn-lg" onClick="{createOrder}">
              <b>COMPRAR</b>
            </button>
          </Link>
              
              <div>
            <Link to="/">
              <button className="btn btn-primary">Volver</button>
            </Link>

            <button className="btn btn-danger" onClick={context.removeProducts}>
              Borrar productos
            </button>
          </div>

                            </section>
                    )

                    }
            </article>
        </>
        )


}
export default CartProducts