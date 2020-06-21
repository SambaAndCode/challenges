import React, { createContext, useState } from 'react';

interface IBeerOnCart {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
  quantity: number;
}

type IBeer = Omit<IBeerOnCart, 'quantity'>;

interface ICartContext {
  cart: IBeerOnCart[];
  isOrdered: boolean;
  handleAddBeer: (beer: IBeer) => void;
  handleDeleteBeer: (id: number) => void;
  handlePayment: () => void;
}

export const CartContext = createContext<ICartContext>({} as ICartContext);

const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<IBeerOnCart[]>([]);
  const [isOrdered, setIsOrdered] = useState(false);

  const handleAddBeer = (beer: IBeer) => {
    const { id } = beer;
    const isInTheCart = !!cart.find(beerOnTheCart => beerOnTheCart.id === id);

    if (isInTheCart) {
      setCart(prevCart => {
        return prevCart.map(beerOnTheCart => {
          if (beerOnTheCart.id === id) {
            return {
              ...beerOnTheCart,
              quantity: beerOnTheCart.quantity + 1,
            };
          }
          return beerOnTheCart;
        });
      });
      return;
    }

    const newBeer = {
      ...beer,
      quantity: 1,
    };

    setCart([...cart, newBeer]);
  };

  const handleDeleteBeer = (id: number) => {
    const quantity = cart.find(beerOnTheCart => beerOnTheCart.id === id)
      ?.quantity;

    if (Number(quantity) > 1) {
      setCart(prevCart => {
        return prevCart.map(beerOnTheCart => {
          if (beerOnTheCart.id === id) {
            return {
              ...beerOnTheCart,
              quantity: beerOnTheCart.quantity - 1,
            };
          }
          return beerOnTheCart;
        });
      });
      return;
    }

    setCart(prevCart => prevCart.filter(beer => beer.id !== id));
  };

  const handlePayment = () => {
    setIsOrdered(true);
    setTimeout(() => {
      setCart([]);
      setIsOrdered(false);
    }, 3000);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isOrdered,
        handleAddBeer,
        handleDeleteBeer,
        handlePayment,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
