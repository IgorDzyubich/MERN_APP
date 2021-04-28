import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import UsersReducer from '../reducers/UsersReducer';
import AuthReducer from '../reducers/AuthReducer';
import ContractsReducer from '../reducers/ContractsReducer'
import ShowsReducer from '../reducers/ShowsReducer'
import FavouritesShowsReducer from '../reducers/FavouritesShowsReducer'
import FriendsReducer from '../reducers/FriendsReducer'

let rootReducers = combineReducers({
    AuthReducer,
    UsersReducer,
    ShowsReducer,
    FavouritesShowsReducer,
    FriendsReducer,
    ContractsReducer
})

let store = createStore(rootReducers, applyMiddleware(thunk))

export default store;