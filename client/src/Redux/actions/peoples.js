import peoplesService from '../../services/peoplesService'
export const GET_PEOPLES = 'GET_PEOPLES'

export const getPeoples = () => dispatch => {
    return peoplesService.getPeoples()
        .then(data => {
            dispatch({ type: GET_PEOPLES, payload: data})
        })
        .catch(err => {
            console.log('GET_PEOPLES Error', err)
        })
}
