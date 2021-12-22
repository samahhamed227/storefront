
const initialState =[];

export default (state = initialState, action) =>{
    const {type,payload} = action;

    switch(type){
        case 'ADD':
            if(payload.inventoryCount !== 0){
                return [...state, payload];
            }else{
                return state;
            }
        case 'DELETE':
            const product = state.filter((item,idx)=>{
                return idx !== payload.idx;
            })
            return{
                product
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