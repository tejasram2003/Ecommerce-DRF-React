import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CLEAR_CART } from '../constants/cartConstants';

export const addToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            stockcount: data.stockcount ,
            quantity: quantity 
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const clearCart = () => (dispatch) => {
    dispatch({
        type: CLEAR_CART
    });
    localStorage.removeItem('cartItems');
}