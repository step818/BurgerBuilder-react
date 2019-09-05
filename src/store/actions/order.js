import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSucccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

export const purchaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  };
}

export const purchaseBurger = (orderData) => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios.post('https://react-my-burger-e79ed.firebaseio.com/orders.json', orderData)
      .then(response => {
        dispatch(purchaseBurgerSucccess(response.data.name, orderData));
      console.log(response.data);
    }).catch( error => {
      dispatch(purchaseBurgerFail(error));
      console.log(error);
    });
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  }
}