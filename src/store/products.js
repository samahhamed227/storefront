
const initialState ={
    products :[
        {name:'TV',description:'Full HD Smart TV | Samsung',category: 'ELECTRONICS',price:'500$',inventoryCount:'10',image: 'https://images.samsung.com/is/image/samsung/id-fhd-t5500-ua43t6500akxxd-frontblack-229359102?$720_576_PNG$'},
        {name:'Macbook Pro',description:'Apple MacBook Pro 13-inch (M1, 2020) | TechRadar',category: 'ELECTRONICS',price:'700 $',inventoryCount:'5',image: 'https://cdn.mos.cms.futurecdn.net/GfinEMFXnT42BFxAcDc2rA.jpg'},
        {name:'Air Fryer',description:'Healthier and safer frying, baking, roasting and grilling without oil or fat, Capacity of ca. 1.5 liters for 2 portions of French fries',category: 'ELECTRONICS',price:'190 $',inventoryCount:'2',image: 'https://www.bestron.com/pub/media/catalog/product/cache/2b93511303f1465766420a04250233c0/a/a/aaf300_ip_cc_friet.jpg'},
        {name:'PIZZA',description:'Margherita Pizza',category: 'FOOD',price:'10 $',inventoryCount:'20',image: 'https://d1uz88p17r663j.cloudfront.net/original/4274048cd5f17c49dfee280f77a3739d_Cheese-Pizza_HB-2.jpg'},
        {name:'SALAD',description:'Tofu & Watercress Salad with Mango & Avocado Recipe |',category: 'FOOD',price:'7 $',inventoryCount:'15',image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2021%2F02%2F04%2Fwatercress-salad-honey-Balsamic-tofu-2000.jpg&q=85'},
        {name:'FALAFEL',description:'Falafel Sandwich With Hummus and Salad',category: 'FOOD',price:'5 $',inventoryCount:'3',image: 'https://www.sidoshawarma.com/wp-content/uploads/Wrap-Falfel.jpg'}
    ],
    activeProduct:[]
}

export default (state = initialState, action) =>{
    const {type,payload}= action;
    switch(type){
        case'ACTIVE_CATEGORY':
        let activated = state.products.filter(item =>{
            return item.category === payload;
        })
        return {
            products: state.products, 
            activeProduct:activated
        };
        case 'REMOVE':
            let removing = state.products.map(item =>{
                if(item.name == payload.name && item.inventoryCount >0){
                    item.inventoryCount = item.inventoryCount - 1;
                }
                if(item.inventoryCount === 0){
                    return item.inventoryCount = 'Out Of Stock';
                }
                return item;
            });
        return {
            products: removing,
            activeProduct: state.activeProduct
        }
        default:
          return state;
    }
}

export function productActive(name){
    return{
        type:'ACTIVE_CATEGORY',
        payload:name
    }
}

export function inventory(name){
    return{
        type:'REMOVE',
        payload: name
    }
}