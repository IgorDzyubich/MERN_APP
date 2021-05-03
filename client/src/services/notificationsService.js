import API from './api'

const NotificationsService = {
    getNotifications: () => {
        return API.get(`/api/notifications`)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log('Notifications service err', err) 
            })
    },
    changeNotifications: (id, body) => {
        return API.put(`/api/notifications/${id}`, body)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log('Change Notifications service err', err) 
            })
    }
}

export default NotificationsService