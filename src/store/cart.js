
const initialState =[];

export default (state = initialState, action) =>{
    const {type,payload} = action;

    switch(type){
        case 'ADD_TO_CART':
            if(payload.inventoryCount !== 0){
                return [...state, payload];
            }else{
                return state;
            }
        default:
            return state;
    }
}

export function addToCart(name){
    return{
        type:'ADD_TO_CART',
        payload: name
    }
}