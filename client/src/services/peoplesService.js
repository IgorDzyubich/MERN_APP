import API from './api'

const peoplesService = {
    getPeoples: () => {
        return API.get(`/api/peoples`)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log('Peoples service err', err) 
            })
    }
}

export default peoplesService