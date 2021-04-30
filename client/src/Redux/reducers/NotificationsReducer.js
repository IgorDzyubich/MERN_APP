import { GET_NOTIFICATIONS } from '../actions/notifications'

const initialState = {
    notifications: [],
    isLoading: false
}

const ShowsReducer = (state = initialState, action) => {

    const { type, payload } = action
    
    switch (type) {
        case GET_NOTIFICATIONS:
            return {
                ...state,
                notifications: payload,
                isLoading: true
            }
        // case GET_SHOW:
        //     return {
        //         ...state,
        //         show: payload,
        //         isLoading: true
        //     }
        // case CHANGE_SHOW:
        //     return {
        //         ...state,
        //         show: payload.show,
        //         isLoading: true
        //     }
        default: {
            return state
        }
    }
}

export default ShowsReducer