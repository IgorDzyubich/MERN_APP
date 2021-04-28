import friendsService from '../../services/friendsService'
export const GET_FRIENDS = 'GET_FRIENDS'
export const DELETE_FRIENDS = 'DELETE_FRIENDS'
export const ADD_FRIENDS = 'ADD_FRIENDS'

export const getFriends = () => dispatch => {
    return friendsService.getFriends()
        .then(data => {
            dispatch({ type: GET_FRIENDS, payload: data})
        })
        .catch(err => {
            console.log('GET_FRIENDS Error', err)
        })
}

export const deleteFriends = (id) => dispatch => {
    return friendsService.deleteFriends(id)
        .then(data => {
            console.log(data.message)
            getFriends()
        })
        .catch(err => {
            console.log('DELETE_FRIENDS Error', err)
        })
}

export const addFriends = (body) => dispatch => {
    return friendsService.addFriends(body)
        .then(data => {
            console.log(data.message)
        })
        .catch(err => {
            console.log('ADD_FRIENDS Error', err)
        })
}