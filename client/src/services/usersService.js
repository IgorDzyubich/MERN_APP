import API from './api'

const UsersService = {
    getUsers: () => {
        return API.get(`/api/users/me/users`)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log('Users service err', err) 
            })
    },
    
}

export default UsersService