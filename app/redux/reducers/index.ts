import { combineReducers } from 'redux'
import { favoritesReducer } from './favorites.reducers'

export default combineReducers({
    favorites: favoritesReducer,
})