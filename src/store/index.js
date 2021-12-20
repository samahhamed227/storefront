// Create my Redux store here 
import {combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import categoryReducer from './category';
import productReducer from './products';
import cartReducer from './cart';

//1-  combine reducers in one reducer 
let reducers = combineReducers({
    categories:categoryReducer,
    products:productReducer,
    cart:cartReducer
});

// 2- createStore 
const store = () => {
    return createStore(reducers, composeWithDevTools())
}

// 3 export 
export default store();