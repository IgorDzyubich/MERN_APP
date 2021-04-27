import { GET_USERS } from '../actions/users'

const initialState = {
    users: [],
    isLoading: false
}

const UsersReducer = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case GET_USERS:
            return {
                ...state,
                users: payload.users,
                isLoading: true
            }
        default: {
            return state
        }
    }
}

export default UsersReducer