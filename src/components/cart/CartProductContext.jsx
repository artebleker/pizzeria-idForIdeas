import React, {createContext, useState} from 'react'

export const CartProductContext = createContext()
 function CartProductContextProvider({children}) {
     const [cartProduct, setCartProduct] = useState([])

     const addToCart = (item, amount) => {
        let found = cartProduct.find((product) => product.id === item.id);
        if (found === undefined) {
            setCartProduct([
            ...cartProduct,
            {
              id: item.id,
              img: item.img,
              name: item.name,
              price: item.price,
              amount: amount,
            },
          ]);
        } else {
          found.amount += amount;
          setCartProduct([...cartProduct]);
        }
      };

      const removeProducts = () => cartProduct([]);

      const deleteProduct = (id) => {
        let res = cartProduct.filter((product) => product.id !== id);
        setCartProduct(res);
      };

      const totalPerProduct = (id) => {
        let index = cartProduct.map((item) => item.id).indexOf(id);
        return cartProduct[index].price * cartProduct[index].amount;
      };
      const total = () => {
        let totalPerProduct = cartProduct.map((item) => totalPerProduct(item.idItem));
        return totalPerProduct.reduce(
          (previousValue, currentValue) => previousValue + currentValue
        );
      };

      

    return (
        <CartProductContext.Provider
        value={{
            cartProduct,
            addToCart,
            removeProducts,
            deleteProduct,
            totalPerProduct,
            total

        }}>
           {children} 
        </CartProductContext.Provider>
    )
}
export default CartProductContextProvider