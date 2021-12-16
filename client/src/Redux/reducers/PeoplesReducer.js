import { GET_PEOPLES} from '../actions/peoples'

const initialState = {
    peoples: [],
    isLoading: false
}

const PeoplesReducer = (state = initialState, action) => {

    const { type, payload } = action
    switch (type) {
        case GET_PEOPLES:
            return {
                ...state,
                peoples: payload,
                isLoading: true
            }
        default: {
            return state
        }
    }
}

export default PeoplesReducer