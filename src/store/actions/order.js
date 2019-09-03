import * as actionTypes from './actionTypes';
import axios from 'axios';

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

export const purchaseBurgerStart = (orderData) => {
  return dispatch => {
    axios.post('https://react-my-burger-e79ed.firebaseio.com/orders.json', orderData)
      .then(response => {
        dispatch(purchaseBurgerSucccess(response.data, orderData));
      console.log(response.data);
  }).catch( error => {
      dispatch(purchaseBurgerFail(error));
      console.log(error);
  });
  }
}