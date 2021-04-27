import { GET_SHOWS, GET_SHOW, CHANGE_SHOW } from '../actions/shows'

const initialState = {
    shows: [],
    show: {},
    isLoading: false
}

const ShowsReducer = (state = initialState, action) => {

    const { type, payload } = action
    
    switch (type) {
        case GET_SHOWS:
            return {
                ...state,
                shows: payload,
                isLoading: true
            }
        case GET_SHOW:
            return {
                ...state,
                show: payload,
                isLoading: true
            }
        case CHANGE_SHOW:
            return {
                ...state,
                show: payload.show,
                isLoading: true
            }
        default: {
            return state
        }
    }
}

export default ShowsReducer