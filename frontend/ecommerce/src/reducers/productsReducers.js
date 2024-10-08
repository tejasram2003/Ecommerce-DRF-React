import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from '../constants/productsConstants'
import { PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_DETAIL_FAIL} from '../constants/productsConstants';
import { PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_SUCCESS, PRODUCT_CREATE_FAIL } from '../constants/productsConstants';
import { PRODUCT_UPDATE_REQUEST, PRODUCT_UPDATE_SUCCESS, PRODUCT_UPDATE_FAIL } from "../constants/productsConstants";
import { PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAIL } from "../constants/productsConstants";



console.log(PRODUCT_LIST_FAIL)



export const productsListReducer = (state = { products: [] }, action) => {
    switch(action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const productDetailReducer = (state = { product: [] }, action) => {
    switch(action.type) {
        case PRODUCT_DETAIL_REQUEST:
            return { loading: true, ...state }
        case PRODUCT_DETAIL_SUCCESS:
            return { loading: false, product: action.payload }
        case PRODUCT_DETAIL_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const createProductReducer = (state = { product: {} }, action) => {
    switch(action.type) {
        case PRODUCT_CREATE_REQUEST:
            return { loading: true, ...state }
        case PRODUCT_CREATE_SUCCESS:
            return { loading: false, product: action.payload }
        case PRODUCT_CREATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const updateProductReducer = (state = { product: {} }, action) => {
    switch(action.type) {
        case PRODUCT_UPDATE_REQUEST:
            return { loading: true, ...state }
        case PRODUCT_UPDATE_SUCCESS:
            return { loading: false, product: action.payload }
        case PRODUCT_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const deleteProductReducer = (state = { product: {} }, action) => {
    switch(action.type) {
        case PRODUCT_DELETE_REQUEST:
            return { loading: true, ...state }
        case PRODUCT_DELETE_SUCCESS:
            return { loading: false, product: action.payload }
        case PRODUCT_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}