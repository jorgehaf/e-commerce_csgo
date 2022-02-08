import productList from './product';

const INITIAL_STATE = {
    value: 0,
    products: productList,
    Cart: []
}

export default function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            console.log('ADD_TO_CART')
            console.log(action)
            return state;


        case 'ADD_ITEM':
            console.log('ADD_ITEM')
            return state;


        case 'REMOVE_ITEM':
            console.log('entrei')
            return state;


        case 'DELETE_ITEM':
            console.log('DELETE_ITEM')
            return state;


        case 'CHANGE_CART':
            console.log('CHANGE_CART')
            return state;


        default:
            return state;
    }
    return state
}