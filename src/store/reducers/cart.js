const INITIAL_STATE = {
    value: 0,
    Cart: []
}

export default function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            console.log('ADD_TO_CART')
            console.log('state', state, 'action', action)
            return state;


        case 'ADD_ITEM':
            console.log('ADD_ITEM')
            console.log('state', state, 'action', action)
            return state;


        case 'REMOVE_ITEM':
            console.log('REMOVE_ITEM')
            console.log('state', state, 'action', action)
            return state;


        case 'DELETE_ITEM':
            console.log('DELETE_ITEM')
            console.log('state', state, 'action', action)
            return state;


        case 'CHANGE_CART':
            console.log('CHANGE_CART')
            console.log('state', state, 'action', action)
            return state;


        default:
            return state;
    }
    return state
}