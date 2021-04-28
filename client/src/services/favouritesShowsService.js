import API from './api'

const favouritesShowsService = {
    getShows: () => {
        return API.get(`/api/shows`)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log('Favourites Shows service err', err) 
            })
    },
    getShow: (id) => {
        return API.get(`api/shows/${id}`)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log('Favourites Show service err', err) 
            })
    },
    addShow: (body) => {
        return API.post(`/api/shows`, body)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log('Add Favourites Show service err', err) 
            })
    },
    deleteShow: (id) => {
        return API.delete(`api/shows/${id}`)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log('Favourites Show service err', err) 
            })
    },
}

export default favouritesShowsService