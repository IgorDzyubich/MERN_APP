import MessagesService from '../../services/messagesService'
export const GET_MESSAGES = 'GET_MESSAGES'
export const CHANGE_MESSAGES = 'CHANGE_MESSAGES'

export const getMessages = () => dispatch => {
    return MessagesService.getMessages()
        .then(data => {
            dispatch({ type: GET_MESSAGES, payload: data.messages})
        })
        .catch(err => {
            console.log('Error', err)
        })
}

export const changeMessages = (id, body) => dispatch => {
    return MessagesService.changeMessages(id, body)
        .then(data => {
            dispatch({ type: CHANGE_MESSAGES, payload: data})
        })
        .catch(err => {
            console.log('Error', err)
        })
}
