import {createStore,applyMiddleware} from 'redux'

import reducers from './reducers'
import {composeWithDevTools} from 'remote-redux-devtools'
import thunk from 'redux-thunk'

const store=createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))


export default store