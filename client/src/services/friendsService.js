import API from './api'

const friendsService = {
    getFriends: () => {
        return API.get(`/api/friends`)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log('Friends service err', err) 
            })
    },
    getFriend: (id) => {
        return API.get(`api/friends/${id}`)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log('Friends service err', err) 
            })
    },
    addFriend: (body) => {
        return API.post(`/api/friends`, body)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log('Add Friends service err', err) 
            })
    },
    deleteFriend: (id) => {
        return API.delete(`api/friends/${id}`)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log('Favourites Show service err', err) 
            })
    },
}

export default friendsService