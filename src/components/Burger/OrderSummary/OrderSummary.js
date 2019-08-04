import React from 'react';

import Auxillary from '../../../hoc/Auxillary';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys( props.ingredients )
    .map( igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li>
      );
    });
  return(
    <Auxillary>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients :</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continnue to Checkout?</p>
    </Auxillary>
  );
};

export default orderSummary;