import React, {createContext, useContext} from 'react';
const CartContext = createContext({});

export const CartContextProvider = ({children, items}) => {
  const add = item => {
    if (!items[item.name]) {
      items[item.name] = {
        count: 0,
        data: {},
      };
    }
    items[item.name].count += 1;
    items[item.name].data = item;
  };

  const remove = item => {
    if (!items[item.name]) {
      items[item.name] = {
        count: 0,
        data: {},
      };
    }
    items[item.name].count -= 1;
    items[item.name].data = item;
  };

  const listAll = () => {
    return Object.values(items);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        add,
        remove,
        listAll,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  return context;
};
