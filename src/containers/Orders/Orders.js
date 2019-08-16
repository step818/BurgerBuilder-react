import React from 'react';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import Order from '../../components/Order/Order';

class Orders extends React.Component {
  state = {
    orders: [],
    lodaing: true
  }

  componentDidMount() {
    axios.get('/orders.json')
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        this.setState({loading: false, orders: fetchedOrders});
      })
      .catch(err => {
        this.setState({loading: false});
      });
  }

  render() {
    return (
      <div> 
        {this.state.orders.map(order => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={+order.price} />
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);