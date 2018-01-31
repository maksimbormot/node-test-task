import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {createBrowserHistory} from 'history'
import {routerMiddleware, routerReducer} from 'react-router-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './modules/Auth/user.reducer'
import {loginUser} from "./modules/Auth/user.action";

const reducers = combineReducers({
    router: routerReducer,
    userReducer
})


const history = createBrowserHistory()

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(
        routerMiddleware(history),
        thunk,
        promiseMiddleware()
    )))

if (localStorage.getItem('user')) {
    store.dispatch(loginUser())
}
export default store