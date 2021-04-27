import { GET_CONTRACTS, GET_CONTRACT, CHANGE_CONTRACT } from '../actions/contracts'

const initialState = {
    contracts: [],
    contract: {},
    isLoading: false
}

const ContractsReducer = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case GET_CONTRACTS:
            return {
                ...state,
                contracts: payload.contracts,
                isLoading: true
            }
        case GET_CONTRACT:
            return {
                ...state,
                contract: payload.contract,
                isLoading: true
            }
        case CHANGE_CONTRACT:
            return {
                ...state,
                contract: payload.contract,
                isLoading: true
            }
        default: {
            return state
        }
    }
}

export default ContractsReducer