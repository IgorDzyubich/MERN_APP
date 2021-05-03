import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import AuthReducer from '../reducers/AuthReducer';
import ShowsReducer from '../reducers/ShowsReducer'
import FavouritesShowsReducer from '../reducers/FavouritesShowsReducer'
import FriendsReducer from '../reducers/FriendsReducer'
import PeoplesReducer from '../reducers/PeoplesReducer'
import NotificationsReducer from '../reducers/NotificationsReducer'
import MessagesReducer from '../reducers/MessagesReducer'

let rootReducers = combineReducers({
    AuthReducer,
    ShowsReducer,
    FavouritesShowsReducer,
    FriendsReducer,
    PeoplesReducer,
    NotificationsReducer,
    MessagesReducer,
})

let store = createStore(rootReducers, applyMiddleware(thunk))

export default store;