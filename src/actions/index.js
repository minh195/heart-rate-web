import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchProductsRequest = () => {
    return dispatch => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
        });
    };
}

export const actFetchProducts = (products) => {
    return {
        type : Types.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProductRequest = (id) => {
    return dispatch => {
        return callApi(`products/${id}`, 'DELETE', null).then(res =>{
            dispatch(actDeleteProduct(id));
        })
    }
}

export const actDeleteProduct = (id) => {
    return {
        type : Types.DELETE_PRODUCT,
        id
    }
}

export const actAddProductRequest = (product) => {
    return dispatch => {
        return callApi('products', 'POST', product).then(res => {
            dispatch(actAddProduct(res.data));
        });
    }
}

export const actAddProduct = (product) => {
    return {
        type : Types.ADD_PRODUCT,
        product
    }
}


export const actGetProductRequest = (id) => {
    return dispatch => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            dispatch(actGetProduct(res.data));
        });
    }
}

export const actGetProduct = (product) => {
    return {
        type : Types.EDIT_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = (product) => {
    return dispatch => {
        return callApi(`products/${product.id}`, 'PUT', product).then(res => {
            dispatch(actUpdateProduct(res.data));
        });
    }
}

export const actUpdateProduct = (product) => {
    return {
        type : Types.UPDATE_PRODUCT,
        product
    }
}
//------------------------------- user--------------------------//

export const actGetUserRequest = (id) => {
    return dispatch => {
        return callApi(`users/${id}`, 'GET', null).then(res => {
            dispatch(actGetUser(res.data));
        });
    }
}

export const actGetUser = (user) => {
    return {
        type : Types.EDIT_USER,
        user
    }
}

export const actFetchUsersRequest = () => {
    return dispatch => {
        return callApi('users', 'GET', null).then(res => {
            dispatch(actFetchUsers(res.data));
        });
    };
}

export const actFetchUsers = (users) => {
    return {
        type : Types.FETCH_USERS,
        users
    }
}

export const actDeleteUserRequest = (id) => {
    return dispatch => {
        return callApi(`users/${id}`, 'DELETE', null).then(res =>{
            dispatch(actDeleteUser(id));
        })
    }
}

export const actDeleteUser = (id) => {
    return {
        type : Types.DELETE_USER,
        id
    }
}

export const actAddUserRequest = (user) => {
    return dispatch => {
        return callApi('users', 'POST', user).then(res => {
            dispatch(actAddUser(res.data));
        });
    }
}

export const actAddUser = (user) => {
    return {
        type : Types.ADD_USER,
        user
    }
}

export const actUpdateUserRequest = (user) => {
    return dispatch => {
        return callApi(`users/${user.id}`, 'PUT', user).then(res => {
            dispatch(actUpdateUser(res.data));
        });
    }
}

export const actUpdateUser = (user) => {
    return {
        type : Types.UPDATE_USER,
        user
    }
}

//------------------------------- doctor --------------------------//

export const actGetDoctorRequest = (id) => {
    return dispatch => {
        return callApi(`doctors/${id}`, 'GET', null).then(res => {
            dispatch(actGetDoctor(res.data));
        });
    }
}

export const actGetDoctor = (doctor) => {
    return {
        type : Types.EDIT_DOCTOR,
        doctor
    }
}

export const actFetchDoctorsRequest = () => {
    return dispatch => {
        return callApi('doctors', 'GET', null).then(res => {
            dispatch(actFetchDoctors(res.data));
        });
    };
}

export const actFetchDoctors = (doctors) => {
    return {
        type : Types.FETCH_DOCTORS,
        doctors
    }
}

export const actDeleteDoctorRequest = (id) => {
    return dispatch => {
        return callApi(`doctors/${id}`, 'DELETE', null).then(res =>{
            dispatch(actDeleteDoctor(id));
        })
    }
}

export const actDeleteDoctor = (id) => {
    return {
        type : Types.DELETE_DOCTOR,
        id
    }
}

export const actAddDoctorRequest = (doctor) => {
    return dispatch => {
        return callApi('doctors', 'POST', doctor).then(res => {
            dispatch(actAddDoctor(res.data));
        });
    }
}

export const actAddDoctor = (doctor) => {
    return {
        type : Types.ADD_DOCTOR,
        doctor
    }
}

export const actUpdateDoctorRequest = (doctor) => {
    return dispatch => {
        return callApi(`doctors/${doctor.id}`, 'PUT', doctor).then(res => {
            dispatch(actUpdateDoctor(res.data));
        });
    }
}

export const actUpdateDoctor = (doctor) => {
    return {
        type : Types.UPDATE_DOCTOR,
        doctor
    }
}
