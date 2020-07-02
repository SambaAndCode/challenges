import { createStore } from 'redux'
import productsReducer from './cart'

const store = createStore(productsReducer)

export default store