import API from './api_tvmaze'

const peoplesService = {
    getPeoples: () => {
        return API.get(`/people?page=1`)
            .then(res => {
                console.log('Data ', res.data)
                return res.data
            })
            .catch(err => {
                console.log('Peoples service err', err) 
            })
    }
}

export default peoplesService