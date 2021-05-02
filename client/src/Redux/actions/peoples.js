import peoplesService from '../../services/peoplesService'
export const GET_PEOPLES = 'GET_PEOPLES'
// export const DELETE_PEOPLES = 'DELETE_PEOPLES'
// export const ADD_PEOPLES = 'ADD_PEOPLES'

export const getPeoples = () => dispatch => {
    return peoplesService.getPeoples()
        .then(data => {
            dispatch({ type: GET_PEOPLES, payload: data})
        })
        .catch(err => {
            console.log('GET_PEOPLES Error', err)
        })
}

// export const deleteFriends = (id) => dispatch => {
//     return friendsService.deleteFriends(id)
//         .then(data => {
//             console.log(data.message)
//             getFriends()
//         })
//         .catch(err => {
//             console.log('DELETE_FRIENDS Error', err)
//         })
// }

// export const addFriends = (body) => dispatch => {
//     return friendsService.addFriends(body)
//         .then(data => {
//             console.log(data.message)
//         })
//         .catch(err => {
//             console.log('ADD_FRIENDS Error', err)
//         })
// }