const initialState = {
  
    categories: [
        {
            name:'ELECTRONICS',
            displayName: 'ELECTRONICS',
            description:'CATEGORY OF ALL THE ELECTRONIC DEVICES' 
        }, 
        { 
            name:'FOOD',
            displayName: 'FOOD',
            description:'CATEGORY OF ALL THE FOOD TYPES'
        }
    ],
    activeCategory: {},
  }
  
  export default (state = initialState, action) => {

    const { payload, type } = action;
    switch (type) {
      case 'ACTIVE_CATEGORY':
        let activated = {};
  
        state.categories.map(item => {
          if (item.name === payload) {
            activated = item;
          }
        });
        return {
          categories: state.categories,
          activeCategory: activated
        };
      default:
        return state;
    }
}
  
  
export function active(name) {
    return {
      type: 'ACTIVE_CATEGORY',
      payload: name
    }
}
  