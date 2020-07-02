// import the dependency
import remove from 'lodash.remove'

// Action Types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const LESS_PRODUCT = 'LESS_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'


// Action Creators
export function addproduct(product) {
  return {
    type: ADD_PRODUCT,
    product
  }
}

export function lessproduct(product) {
  return {
    type: LESS_PRODUCT,
    product
  }
}

export function deleteproduct(id) {
  return {
    type: DELETE_PRODUCT,
    payload: id
  }
}


// reducer

const initialState = []

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
    	for (var i = 0; i < state.length; i++) {
    		if(state[i].product.id == action.product.id){
    			state[i].count++
    			return [
    			...state]
    		} 
    	}
      return [
        ...state,
        {   
          count: 1,      
          product: action.product
        }
      ]

    case LESS_PRODUCT:
    	for (var i = 0; i < state.length; i++) {
    		if(state[i].product.id == action.product.id){
    			state[i].count--
    			return [
    			...state]
    		} 
    	}

    case DELETE_PRODUCT:
      const deletedNewArray = remove(state, obj => {
        return obj.product.id != action.payload
      })
      return deletedNewArray

    default:
      return state
  }
}

export default productsReducer
