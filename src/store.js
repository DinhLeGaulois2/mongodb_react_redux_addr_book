import { applyMiddleware, createStore, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { reducer as reduxFormReducer } from 'redux-form'

import addr_bookReducer from './reducers/addr_book/addr_bookReducer'

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(combineReducers({
    addrbook: addr_bookReducer,

    form: reduxFormReducer // mounted under "form"
}), middleware);