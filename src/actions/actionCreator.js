import * as types from "../types/type";

//rxaction
export const addProduct = (payload) => {
    return ({
        type: types.ADD_PRODUCT,
        payload
    })
}

export const getProducts = (payload) => ({
    type: types.GET_PRODUCTS,
    payload
})



