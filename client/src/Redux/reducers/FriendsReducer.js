import { GET_FRIENDS} from '../actions/friends'

const initialState = {
    friends: [],
    isLoading: false
}

const FriendsReducer = (state = initialState, action) => {

    const { type, payload } = action
    switch (type) {
        case GET_FRIENDS:
            return {
                ...state,
                friends: payload.friends,
                isLoading: true
            }
        default: {
            return state
        }
    }
}

export default FriendsReducer