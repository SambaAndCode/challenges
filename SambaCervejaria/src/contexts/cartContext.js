import React from 'react';

const CartContext = React.createContext();

const CartProvider = ({children}) => {
  const [visible, setVisible] = React.useState(false);
  const [cart, setCart] = React.useState([]);

  return (
    <CartContext.Provider value={{cart, visible, setVisible, setCart}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const {cart, visible, setVisible, setCart} = React.useContext(CartContext);
  return {cart, visible, setVisible, setCart};
};

export default CartProvider;
