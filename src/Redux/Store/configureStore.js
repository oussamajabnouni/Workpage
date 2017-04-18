import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import reducer  from './../Reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState) => {
    return  createStore(reducer, 
                        initialState,
                        composeEnhancers(applyMiddleware(thunk)))
}


export const history = syncHistoryWithStore(browserHistory,configureStore())
export default configureStore