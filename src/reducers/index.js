import { combineReducers } from 'redux';
import products from './products';
import users from "./users";
import itemEditing from './itemEditing';

const appReducers = combineReducers({
    products,
    users,
    itemEditing
});

export default appReducers;
