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
    },
    // changeContract: (id, body) => {
    //     return API.patch(`/api/contracts/contract/${id}`, body)
    //         .then(res => {
    //             return res.data
    //         })
    //         .catch(err => {
    //             console.log('Change Contract service err', err) 
    //         })
    // },
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

export default ShowsService