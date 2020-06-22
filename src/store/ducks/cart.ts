import { IBeer, IProduct } from "../../types";
import { Dispatch } from "react";

export const Types = {
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  ADD_TO_CART: "ADD_TO_CART",
};

export interface IState {
  products: [IProduct];
  totalQuantity: number;
}

export const INITIAL_STATE: IState = {
  products: [],
  totalQuantity: 0,
};

export default (state: IState, action: any): IState => {
  switch (action.type) {
    case Types.ADD_TO_CART: {
      const products = [...state.products];
      const product = products.find(
        (product) => product.beer.id === action.payload.beer.id
      );
      if (!product) {
        products.push({ beer: action.payload.beer, quantity: 1 });
      } else {
        product.quantity += 1;
      }
      return {
        ...state,
        products: products,
        totalQuantity: state.totalQuantity + 1,
      };
    }
    case Types.REMOVE_FROM_CART: {
      return {
        ...state,
        products: state.products.filter(
          (product) => product.beer.id !== action.payload.beer.id
        ),
      };
    }
    default:
      return { ...state };
  }
};

export const Creators = {
  addToCart: (product: IBeer, dispatch: Dispatch) => {
    dispatch({
      type: Types.ADD_TO_CART,
    });
  },
  removeFromCart: (product: IBeer, dispatch: Dispatch) => {
    dispatch({
      type: Types.REMOVE_FROM_CART,
    });
  },
};
