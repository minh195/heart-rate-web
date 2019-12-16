import { combineReducers } from 'redux';
import products from './products';
import users from "./users";
import doctors from "./doctor";
import itemEditing from './itemEditing';

const appReducers = combineReducers({
    products,
    users,
    doctors,
    itemEditing
});

export default appReducers;
