import NotificationsService from '../../services/notificationsService'
export const GET_NOTIFICATIONS = 'GET_NOTIFICATIONS'
export const CHANGE_NOTIFICATIONS = 'CHANGE_NOTIFICATIONS'

export const getNotifications = () => dispatch => {
    return NotificationsService.getNotifications()
        .then(data => {
            dispatch({ type: GET_NOTIFICATIONS, payload: data.notifications})
        })
        .catch(err => {
            console.log('Error', err)
        })
}

export const changeNotifications = (id, body) => dispatch => {
    return NotificationsService.changeNotifications(id, body)
        .then(data => {
            dispatch({ type: CHANGE_NOTIFICATIONS, payload: data})
        })
        .catch(err => {
            console.log('Error', err)
        })
}
