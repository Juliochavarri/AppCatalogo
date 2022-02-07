import { ADD_FAVORITE } from "../types/favorites.types"

export const addFavorite = product => ({
    type: ADD_FAVORITE,
    product
})