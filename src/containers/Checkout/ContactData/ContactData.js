import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css'
import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState( {loading: true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Arturo F',
                adress: {
                    street: 'Deez Street',
                    zipCode: '55555',
                    country: 'Lalaland'
                },
                email: 'test@burger.com'
            },
            deliveryMethod: 'fastest'
        }
        // this could also be your own backend end point e.g. api-beer-router etc.
        //              |
        //              V    
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false })
            }); 
    }

    render () {
        let form = (
            <form>
                <input className={classes.Input} type="name" name="name" placeholder="Your name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your Mail" />
                <input className={classes.Input} type="name" name="street" placeholder="Street" />
                <input className={classes.Input} type="name" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data </h4>
                {form}
            </div>
        )
    }
}

export default ContactData;