import ShowsService from '../../services/showsService'
export const GET_SHOWS = 'GET_SHOWS'
export const GET_SHOW = 'GET_SHOW'
export const CHANGE_SHOW = 'CHANGE_SHOW'
export const ADD_SHOW = 'ADD_SHOW'

export const getShows = () => dispatch => {
    return ShowsService.getShows()
        .then(data => {
            dispatch({ type: GET_SHOWS, payload: data})
        })
        .catch(err => {
            console.log('Error', err)
        })
}

export const getShow = (id) => dispatch => {
    return ShowsService.getShow(id)
        .then(data => {
            dispatch({ type: GET_SHOW, payload: data})
        })
        .catch(err => {
            console.log('Error', err)
        })
}
