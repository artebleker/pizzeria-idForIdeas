import Header from "./components/header/Header";
import Main from "./components/main/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import CartProductContextProvider from "./components/cart/CartProductContext"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProducts from "./components/cart/CartProducts";
function App() {
  return (
    <>
    <CartProductContextProvider>
    <BrowserRouter>
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

