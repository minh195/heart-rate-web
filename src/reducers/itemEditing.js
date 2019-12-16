import * as Types from './../constants/ActionTypes';

var initialState = {};

const itemEditing = (state = initialState, action) => {
    switch(action.type){
        case Types.EDIT_PRODUCT:
            return action.product;
        case Types.EDIT_USER:
            return action.user;
        case Types.EDIT_DOCTOR:
            return action.doctor;
        default:
            return state;
    }
}

export default itemEditing;
