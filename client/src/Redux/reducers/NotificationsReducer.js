import { GET_NOTIFICATIONS } from '../actions/notifications'

const initialState = {
    notifications: [],
    isLoading: false
}

const NotificationsReducer = (state = initialState, action) => {

    const { type, payload } = action
    
    switch (type) {
        case GET_NOTIFICATIONS:
            return {
                ...state,
                notifications: payload,
                isLoading: true
            }
        default: {
            return state
        }
    }
}

export default NotificationsReducer