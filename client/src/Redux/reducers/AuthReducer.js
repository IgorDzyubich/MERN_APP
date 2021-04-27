import { LOGIN, LOGOUT, REGISTER } from '../actions/auth'

const initialState = {
    user: {},
    token: '',
    message: '',
    isLoggedIn: false
}

const AuthReducer = (state = initialState, action) => {

    const { type, payload } = action
    
    switch (type) {
        case REGISTER:
            return {
                ...state,
                message: payload.message
            }
        case LOGIN:
            return {
                ...state,
                user: payload.user,
                token: payload.jwt_token,
                isLoggedIn: true
            }
        case LOGOUT:
            return {
                ...state,
                user: {},
                token: '',
                isLoggedIn: false
            }
        default: {
            return state
        }
    }
}

export default AuthReducer