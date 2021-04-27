import AuthService from '../../services/authService'
export const REGISTER = 'REGISTER'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const register = (params, history) => dispatch => {
    return AuthService.register(params)
        .then(data => {
            dispatch({ type: REGISTER, payload: data})
            history.push('/login')
        })
        .catch(err => {
            console.log('Error', err)
        })
}

export const log = (params, history) => dispatch => {
    return AuthService.login(params)
        .then(data => {
            dispatch({ type: LOGIN, payload: data})
            history.push('/dashboard')
        })
        .catch(err => {
            console.log('Error', err)
        })
}

export const logout = () => dispatch => {
    AuthService.logout()
    dispatch({ type: LOGOUT})
}