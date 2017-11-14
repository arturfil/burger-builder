import React from 'react';
import classes from './Burger.css';
import BurgerIgredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerIgredient type="bread-top"/>
            <BurgerIgredient type="cheese" />
            <BurgerIgredient type="meat" />
            <BurgerIgredient type="bread-bottom" />
        </div>
    );
}

export default burger;