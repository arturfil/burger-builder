import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1> We hope it tastes well </h1>
            <div className="container">
                <div style={{ width: '100%', margin: 'auto', textAlign: 'center'}}>
                    <Burger ingredients={props.ingredients}/>
                </div>
            </div>
            <Button 
            btnType="Danger"
            >CANCEL</Button>
            <Button 
            btnType="Success"
            >CONTINUE</Button>
        </div>
    )
};

export default checkoutSummary;