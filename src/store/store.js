import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { clothesReducers } from '../reducers/clothesReducers';


const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    clothe: clothesReducers
})


export const store = createStore(
    reducers,
    composeEnhancers( 
        applyMiddleware(thunk))
)