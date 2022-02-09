const INITIAL_STATE = {
    totalGunPrice: 0,
    Cart: []
}

export default function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            console.log('ADD_TO_CART')
            console.log('state', state, 'action', action)
            return {
                ...state,
                totalGunPrice: 0
            };


        case 'ADD_ITEM':
            console.log('ADD_ITEM')
            console.log('state', state, 'action', action)
            return {
                ...state,
                totalGunPrice: 0
            };


        case 'REMOVE_ITEM':
            console.log('REMOVE_ITEM')
            console.log('state', state, 'action', action)
            return {
                ...state,
                totalGunPrice: 0
            };


        case 'DELETE_ITEM':
            console.log('DELETE_ITEM')
            console.log('state', state, 'action', action)
            return {
                ...state,
                totalGunPrice: 0
            };


        default:
            return state;
    }
}