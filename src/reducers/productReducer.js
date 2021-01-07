//import {ADD_PRODUCT, REMOVE_PRODUCT} from "../types/type"
import * as types from "../types/type"

//rxreducer - reducer
//rcredux - class component with redux
//rxconst - constants
//rxaction - action


const initialState = {
    products: [],
    cartProducts: [{ price: 123, name: "Hello" }]
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case types.ADD_PRODUCT:
            return { ...state, cartProducts: [...state.cartProducts, payload] }

        case types.GET_PRODUCTS:
            return { ...state, products: payload }
        // return { ...state, products: [...state.products, payload] }
        //[[], [productsArray]]

        default:
            return state
    }
}
