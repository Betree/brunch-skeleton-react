import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import Immutable from 'immutable'

// Import Reducers
import TestReducer from './TestReducer/reducer'

// Declare reducers
const reducers = combineReducers({
  TestReducer
})

// Declare middlewares
const middlewares = []

// If running in dev and browser has redux devtools extension activated, use it
const getComposer = () => {
  if (!window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    return compose
  return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    serialize: {immutable: Immutable},
    shouldCatchErrors: true
  })
}

const enhancer = getComposer()(applyMiddleware(...middlewares))
const preloadedState = module.hot && module.hot.data && module.hot.data.counter || {}
export default createStore(reducers, preloadedState, enhancer)