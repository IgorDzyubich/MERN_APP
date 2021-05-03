import API from './api'

const AuthService = {
    register: (data) => {
        return API.post(`/api/auth/register`, data)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log('Auth service err', err) 
            })
    },
    login: (data) => {
        return API.post(`/api/auth/login`, data)
            .then(res => {
                API.defaults.headers['Authorization'] = `Bearer ${res.data.jwt_token}`
                return res.data
            })
            .catch(err => {
                console.log('Auth service err', err) 
            })
    },
    logout: () => {
        API.defaults.headers['Authorization'] = ``
    }
}

export default AuthService