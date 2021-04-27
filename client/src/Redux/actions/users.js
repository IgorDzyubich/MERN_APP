import UsersService from '../../services/usersService'
export const GET_USERS = 'GET_USERS'

export const getUsers = () => dispatch => {
    return UsersService.getUsers()
        .then(data => {
            // console.log('Get users data', data)
            dispatch({ type: GET_USERS, payload: data})
            // history.push('/dashboard')
        })
        .catch(err => {
            console.log('Error', err)
        })
}
