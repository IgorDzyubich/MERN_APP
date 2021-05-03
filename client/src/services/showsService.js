import API from './api_tvmaze'

const ShowsService = {
    getShows: () => {
        return API.get(`/shows`)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log('Shows service err', err) 
            })
    },
    getShow: (id) => {
        return API.get(`/show/${id}`)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log('Show service err', err) 
            })
    }
}

export default ShowsService