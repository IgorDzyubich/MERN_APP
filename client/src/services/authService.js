import API from './api'

const AuthService = {
    register: (data) => {
        // console.log('data => ', data)
        return API.post(`/api/auth/register`, data)
            .then(res => {
                // console.log('res => ', res)
                // API.defaults.headers['Authorization'] = `Bearer ${res.data.jwt_token}`
                return res.data
            })
            .catch(err => {
                console.log('Auth service err', err) 
            })
    },
    login: (data) => {
        // console.log('data => ', data)
        return API.post(`/api/auth/login`, data)
            .then(res => {
                // console.log('res => ', res)
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