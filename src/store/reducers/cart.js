const INITIAL_STATE = {
    totalGunsPrice: 0,
    Cart: []
}

export default function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            console.log('ADD_TO_CART')
            console.log('state', state)
            console.log('action', action)
            console.log(action.army)
            let existArmy = state.Cart.findIndex(
                (el) => el.id === action.army.id
            );
            console.log(existArmy)
            if (existArmy === -1) {
                let objArmy = {
                    id: action.army.id,
                    image: action.army.image,
                    name: action.army.name,
                    totalGunPrice: action.army.price,
                    amount: 1
                }
                state.Cart.push(objArmy)
            }









            return {
                ...state,
                totalGunsPrice: 0
            };


        case 'ADD_ITEM':
            console.log('ADD_ITEM')
            console.log('state', state, 'action', action)
            return {
                ...state,
                totalGunsPrice: 0
            };


        case 'REMOVE_ITEM':
            console.log('REMOVE_ITEM')
            console.log('state', state, 'action', action)
            return {
                ...state,
                totalGunsPrice: 0
            };


        case 'DELETE_ITEM':
            console.log('DELETE_ITEM')
            console.log('state', state, 'action', action)
            return {
                ...state,
                totalGunsPrice: 0
            };


        case 'MODIFY_CART':
            console.log('MODIFY_CART')
            console.log('state', state, 'action', action)
            return {
                ...state,
                totalGunsPrice: 0
            };


        default:
            return state;
    }
}