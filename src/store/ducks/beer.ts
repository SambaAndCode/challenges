import { IBeer } from "../../types";
import { Dispatch } from "react";
import axios from "axios";
import { BASE_URL, getParams } from "../../constants";

const Types = {
  FETCH_BEERS_REQUEST: "FETCH_BEERS_REQUEST",
  FETCH_BEERS_SUCCESS: "FETCH_BEERS_SUCCESS",
  FETCH_BEERS_FAILURE: "FETCH_BEERS_FAILURE",
  FETCH_MORE_BEERS_SUCCESS: "FETCH_MORE_BEERS_SUCCESS",
};

export interface IState {
  isLoading: boolean;
  beers: [IBeer];
  error: "";
}

export const INITIAL_STATE: IState = {
  isLoading: false,
  beers: [],
  error: "",
};

export default (state: IState, action: any): IState => {
  switch (action.type) {
    case Types.FETCH_BEERS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case Types.FETCH_BEERS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        beers: action.payload.beers,
      };
    }
    case Types.FETCH_BEERS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    case Types.FETCH_MORE_BEERS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        beers: state.beers.concat(action.payload.beers),
      };
    }
    default:
      return { ...state };
  }
};

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
  fetchMoreBeers: (params: any, dispatch: Dispatch) => {
    dispatch({
      type: Types.FETCH_BEERS_REQUEST,
    });
    axios
      .get(`${BASE_URL}/beers${getParams(params)}`)
      .then((resp) => {
        dispatch({
          type: Types.FETCH_MORE_BEERS_SUCCESS,
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
