import { ADD_FAVORITE, CLEAN_FAVORITES, DELETE_FAVORITE } from "../types/favorites.types"

const initialState = {
    favorites: []
}

export const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites,action.product]
            }
        case DELETE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(product => product.id !== action.id)
            }
        case CLEAN_FAVORITES:
            return {
                ...state,
                favorites: []
            }
        default: 
            return state
    }
}