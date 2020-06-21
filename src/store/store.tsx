import React, { createContext, useReducer, ElementType, Dispatch } from "react";
import combineReducers from "react-combine-reducers";
import beerReducer, {
  IState as IBeerState,
  INITIAL_STATE as INITIAL_STATE_BEER,
} from "./ducks/beer";

// interface IState {
//   beer: IBeerState;
// }

// const initialState: IState = {
//   beer: INITIAL_STATE_BEER,
// };

// interface IContext {
//   state: IState;
//   dispatch: any;
// }
console.log(beerReducer);
const [rootReducerCombined, initialStateCombined] = combineReducers({
  beer: [beerReducer, INITIAL_STATE_BEER],
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
