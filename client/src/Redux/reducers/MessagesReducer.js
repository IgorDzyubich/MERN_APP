import { GET_MESSAGES } from '../actions/messages'

const initialState = {
    messages: [],
    isLoading: false
}

const MessagesReducer = (state = initialState, action) => {

    const { type, payload } = action
    
    switch (type) {
        case GET_MESSAGES:
            return {
                ...state,
                messages: payload,
                isLoading: true
            }
        default: {
            return state
        }
    }
}

export default MessagesReducer