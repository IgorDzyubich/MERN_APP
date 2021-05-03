import { GET_FAVOURITES_SHOWS, GET_FAVOURITES_SHOW } from '../actions/favouritesShows'

const initialState = {
    shows: [],
    show: {},
    isLoading: false
}

const FavouritesShowsReducer = (state = initialState, action) => {

    const { type, payload } = action
    
    switch (type) {
        case GET_FAVOURITES_SHOWS:
            return {
                ...state,
                shows: payload.shows,
                isLoading: true
            }
        case GET_FAVOURITES_SHOW:
            return {
                ...state,
                show: payload.show,
                isLoading: true
            }
        default: {
            return state
        }
    }
}

export default FavouritesShowsReducer