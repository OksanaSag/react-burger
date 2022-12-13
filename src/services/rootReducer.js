import { combineReducers } from 'redux';
import { menuReducer } from '../services/reducers/reducers';
import { orderReducer } from '../services/reducers/orderList';

const rootReducer = combineReducers({
    menu: menuReducer,
    order: orderReducer
});
export default rootReducer;