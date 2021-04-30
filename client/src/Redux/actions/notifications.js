import NotificationsService from '../../services/notificationsService'
export const GET_NOTIFICATIONS = 'GET_NOTIFICATIONS'
// export const GET_SHOW = 'GET_SHOW'
// export const CHANGE_SHOW = 'CHANGE_SHOW'
// export const ADD_SHOW = 'ADD_SHOW'

export const getNotifications = () => dispatch => {
    return NotificationsService.getNotifications()
        .then(data => {
            console.log('Note  data', data)
            dispatch({ type: GET_NOTIFICATIONS, payload: data.notifications})
            // history.push('/dashboard')
        })
        .catch(err => {
            console.log('Error', err)
        })
}

// export const getShow = (id) => dispatch => {
//     return ShowsService.getShow(id)
//         .then(data => {
//             dispatch({ type: GET_SHOW, payload: data})
//             // history.push('/dashboard')
//         })
//         .catch(err => {
//             console.log('Error', err)
//         })
// }

// export const changeShow = (id, body) => dispatch => {
//     return ShowsService.changeShow(id, body)
//         .then(data => {
//             dispatch({ type: CHANGE_SHOW, payload: data})
//             // history.push('/dashboard')
//         })
//         .catch(err => {
//             console.log('Error', err)
//         })
// }

// export const addShow = (body) => dispatch => {
//     return ShowsService.addShow(body)
//         .then(data => {
//             dispatch({ type: ADD_SHOW, payload: data})
//             // history.push('/dashboard')
//         })
//         .catch(err => {
//             console.log('Error', err)
//         })
// }