import Header from "./components/header/Header";
import Main from "./components/main/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import CartProductContextProvider from "./components/cart/CartProductContext"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProducts from "./components/cart/CartProducts";
import whatsaap from "./assets/images/whatsaap.svg"
import style from "./App.module.css"



function App() {
  return (
    <>
    <CartProductContextProvider>
    <BrowserRouter>
    <a   className={style.btnWhatsaap} target="_blank" href="https://api.whatsapp.com/send?phone=3105042211" rel="noreferrer">
      <img className={style.imgWhatsaap} src={whatsaap} alt="ghgh" />
    </a>
    
    
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/comprar' element={<CartProducts/>}/>
      </Routes>
    </BrowserRouter>
    </CartProductContextProvider>
    </>
  );
}

export default App;

