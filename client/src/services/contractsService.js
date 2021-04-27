import API from './api'

const ContractsService = {
    getContracts: () => {
        return API.get(`/api/contracts`)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log('Contracts service err', err) 
            })
    },
    getContract: (id) => {
        return API.get(`/api/contracts/contract/${id}`)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log('Contract service err', err) 
            })
    },
    changeContract: (id, body) => {
        return API.patch(`/api/contracts/contract/${id}`, body)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log('Change Contract service err', err) 
            })
    },
    addContract: (body) => {
        return API.post(`/api/contracts/contract`, body)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log('Add Contract service err', err) 
            })
    }
}

export default ContractsService