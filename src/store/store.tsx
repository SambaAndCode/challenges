import React, { createContext, useReducer, ElementType, Dispatch } from "react";
import combineReducers from "react-combine-reducers";
import createBeerReducer, {
  INITIAL_STATE as INITIAL_STATE_BEER,
} from "./ducks/beer";
import createCartReducer, {
  INITIAL_STATE as INITIAL_STATE_CART,
} from "./ducks/cart";

const [rootReducerCombined, initialStateCombined] = combineReducers({
  beer: [createBeerReducer, INITIAL_STATE_BEER],
  cart: [createCartReducer, INITIAL_STATE_CART],
});

const initialContext = {
  state: initialStateCombined,
  dispatch: null,
};

const store = createContext(initialContext);

const { Provider } = store;

const StateProvider = ({ children }: { children: ElementType }) => {
  const memoizedReducer = React.useCallback(rootReducerCombined, [
    initialStateCombined,
  ]);
  const [state, dispatch] = useReducer(memoizedReducer, initialStateCombined);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
