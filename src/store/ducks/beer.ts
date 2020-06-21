import { IBeer } from "../../types";
import { Dispatch } from "react";
import axios from "axios";
import { BASE_URL, getParams } from "../../constants";

const Types = {
  FETCH_BEERS_REQUEST: "FETCH_BEERS_REQUEST",
  FETCH_BEERS_SUCCESS: "FETCH_BEERS_SUCCESS",
  FETCH_BEERS_FAILURE: "FETCH_BEERS_FAILURE",
};

export interface IState {
  isLoading: false;
  beers: [IBeer];
  error: "";
}

export const INITIAL_STATE: IState = {
  isLoading: false,
  beers: [],
  error: "",
};

export default (() => {
  return (state: IState, action: any): IState => {
    switch (action.type) {
      case Types.FETCH_BEERS_REQUEST: {
        return {
          ...state,
          beers: action.beers,
        };
      }
      case Types.FETCH_BEERS_SUCCESS: {
        return {
          ...state,
          beers: action.payload.beers,
        };
      }
      case Types.FETCH_BEERS_FAILURE: {
        return {
          ...state,
          beers: action.beers,
        };
      }
      default:
        throw new Error();
    }
  };
})();
export const Creators = {
  fetchBeers: (params: any, dispatch: Dispatch) => {
    dispatch({
      type: Types.FETCH_BEERS_REQUEST,
    });
    axios
      .get(`${BASE_URL}/beers${getParams(params)}`)
      .then((resp) => {
        dispatch({
          type: Types.FETCH_BEERS_SUCCESS,
          payload: { beers: resp.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: Types.FETCH_BEERS_FAILURE,
          payload: { error },
        });
      });
  },
};
