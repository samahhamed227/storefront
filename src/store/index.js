// Create my Redux store here 
import {combineReducers, createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import categoryReducer from './category';
import productReducer from './products';
import cartReducer from './cart';
import thunk from 'redux-thunk';

//1-  combine reducers in one reducer 
let reducers = combineReducers({
    categories:categoryReducer,
    products:productReducer,
    cart:cartReducer
});

// 2- createStore 
const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}

// 3 export 
export default store();
