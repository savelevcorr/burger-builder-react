import React from 'react';
import {string} from 'prop-types';

import classes from './BurgerIngredient.css';

/**
 * Render an ingredient depends on props.type
 * @type {function}
 * @returns {object};
 */
const BurgerIngredient = props => {
    let ingredient = null;

    switch (props.type) {
        case 'bred-bottom':
            ingredient = <div className={classes.BredBottom}></div>;
            break;
        case 'bread-top':
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case 'meat':
            ingredient = <div className={classes.Meat}></div>;
            break;

        case 'cheese':
            ingredient = <div className={classes.Cheese}></div>;
            break;

        case 'salad':
            ingredient = <div className={classes.Salad}></div>;
            break;

        case 'bacon':
            ingredient = <div className={classes.Bacon}></div>;
            break;

        default:
            ingredient = null;

    }

    return ingredient;
}

BurgerIngredient.propTypes = {
    type: string.isReuired
}

export default BurgerIngredient;