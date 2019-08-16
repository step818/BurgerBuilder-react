import React from 'react';

import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends React.Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Stephen Trewick',
                address: {
                    street: '1 Test St.',
                    postalCode: '98133',
                    country: 'United States'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(res => {
              console.log(res.data);
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({loading: false});
            });
  }

  render() {
    let form = (
      <form>
        <input className={classes.Input} type="text" name="name" placeholder="Your name"/>
        <input className={classes.Input} type="email" name="email" placeholder="Your email" />
        <input className={classes.Input} type="text" name="street" placeholder="Your name"/>
        <input className={classes.Input} type="text" name="postalCode" placeholder="Your postal code" />
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;