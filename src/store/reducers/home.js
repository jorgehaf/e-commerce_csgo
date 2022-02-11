const INITIAL_STATE = {
    displayHamburger: false
}

export default function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'DISPLAY_HAMBURGER':
            state.displayHamburger = !state.displayHamburger;

            return {
                ...state
            };


        default:
            return state;
    }
}