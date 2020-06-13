import React, {createContext, useContext} from 'react';
const CartContext = createContext({});

export const CartContextProvider = ({children, items, setItems}) => {
  const add = item => {
    if (!items[item.name]) {
      items[item.name] = {
        count: 0,
        data: {},
      };
    }
    items[item.name].count += 1;
    items[item.name].data = item;
    setItems({...items});
  };

  const remove = item => {
    if (items[item.name]) {
      delete items[item.name];
      setItems({...items});
    }
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
