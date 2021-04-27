import ContractsService from '../../services/contractsService'
export const GET_CONTRACTS = 'GET_CONTRACTS'
export const GET_CONTRACT = 'GET_CONTRACT'
export const CHANGE_CONTRACT = 'CHANGE_CONTRACT'
export const ADD_CONTRACT = 'ADD_CONTRACT'

export const getContracts = () => dispatch => {
    return ContractsService.getContracts()
        .then(data => {
            // console.log('Get users data', data)
            dispatch({ type: GET_CONTRACTS, payload: data})
            // history.push('/dashboard')
        })
        .catch(err => {
            console.log('Error', err)
        })
}

export const getContract = (id) => dispatch => {
    return ContractsService.getContract(id)
        .then(data => {
            dispatch({ type: GET_CONTRACT, payload: data})
            // history.push('/dashboard')
        })
        .catch(err => {
            console.log('Error', err)
        })
}

export const changeContract = (id, body) => dispatch => {
    return ContractsService.changeContract(id, body)
        .then(data => {
            dispatch({ type: CHANGE_CONTRACT, payload: data})
            // history.push('/dashboard')
        })
        .catch(err => {
            console.log('Error', err)
        })
}

export const addContract = (body) => dispatch => {
    return ContractsService.addContract(body)
        .then(data => {
            dispatch({ type: ADD_CONTRACT, payload: data})
            // history.push('/dashboard')
        })
        .catch(err => {
            console.log('Error', err)
        })
}