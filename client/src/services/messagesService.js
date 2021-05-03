import API from './api'

const MessagesService = {
    getMessages: () => {
        return API.get(`/api/messages`)
            .then(res => {
                console.log('Note  res', res.data)
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
    },
    // addContract: (body) => {
    //     return API.post(`/api/contracts/contract`, body)
    //         .then(res => {
    //             return res.data
    //         })
    //         .catch(err => {
    //             console.log('Add Contract service err', err) 
    //         })
    // }
}

export default MessagesService