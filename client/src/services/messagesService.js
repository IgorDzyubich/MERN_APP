import API from './api'

const MessagesService = {
    getMessages: () => {
        return API.get(`/api/messages`)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log('Messages service err', err) 
            })
    },
    changeMessages: (id, body) => {
        return API.put(`/api/messages/${id}`, body)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log('Change Messages service err', err) 
            })
    }
}

export default MessagesService