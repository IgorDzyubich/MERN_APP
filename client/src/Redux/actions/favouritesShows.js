import favouritesShowsService from '../../services/favouritesShowsService'
export const GET_FAVOURITES_SHOWS = 'GET_FAVOURITES_SHOWS'
export const GET_FAVOURITES_SHOW = 'GET_FAVOURITES_SHOW'
export const DELETE_FAVOURITES_SHOW = 'DELETE_FAVOURITES_SHOW'
export const ADD_FAVOURITES_SHOW = 'ADD_FAVOURITES_SHOW'

export const getFavouritesShows = () => dispatch => {
    return favouritesShowsService.getShows()
        .then(data => {
            dispatch({ type: GET_FAVOURITES_SHOWS, payload: data})
        })
        .catch(err => {
            console.log('GET_FAVOURITES_SHOWS Error', err)
        })
}

export const getFavouritesShow = (id) => dispatch => {
    return favouritesShowsService.getShow(id)
        .then(data => {
            dispatch({ type: GET_FAVOURITES_SHOW, payload: data})
        })
        .catch(err => {
            console.log('GET_FAVOURITES_SHOW Error', err)
        })
}

export const deleteFavouritesShow = (id) => dispatch => {
    return favouritesShowsService.deleteShow(id)
        .then(data => {
            console.log(data.message)
            getFavouritesShows()
        })
        .catch(err => {
            console.log('DELETE_FAVOURITES_SHOW Error', err)
        })
}

export const addFavouritesShow = (body) => dispatch => {
    return favouritesShowsService.addShow(body)
        .then(data => {
            console.log(data.message)
        })
        .catch(err => {
            console.log('ADD_FAVOURITES_SHOW Error', err)
        })
}