import * as Types from './../constants/ActionTypes';
var initialState = [];

var findIndex = (doctors, id) => {
    var result = -1;
    doctors.forEach((doctor, index) => {
        if (doctor.id === id) {
            result = index;
        }
    });
    return result;
}

const doctors = (state = initialState, action) => {
    var index = -1;
    var { id, doctor } = action;
    switch (action.type) {
        case Types.FETCH_DOCTORS:
            state = action.doctors;
            return [...state];
        case Types.DELETE_DOCTOR:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_DOCTOR:
            state.push(action.doctor);
            return [...state];
        case Types.UPDATE_DOCTOR:
            index = findIndex(state, doctor.id);
            state[index] = doctor;
            return [...state];
        default: return [...state];
    }
};

export default doctors;
