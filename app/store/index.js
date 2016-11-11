import {createStore,applyMiddleware} from 'redux'

import reducers from './reducers'
import {composeWithDevTools} from 'remote-redux-devtools'
import thunk from 'redux-thunk'

const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 })
const store=createStore(reducers,composeEnhancers(applyMiddleware(thunk)))


export default store