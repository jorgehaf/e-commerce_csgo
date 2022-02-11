import { combineReducers } from 'redux';

import cart from './cart';
import home from './home';

export default combineReducers({
    cart,
    home
})