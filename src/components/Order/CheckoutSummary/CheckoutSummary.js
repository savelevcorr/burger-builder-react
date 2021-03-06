import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../ui/Button/Button";
import classes from "./CheckoutSummary.css";

const checkoutSummary = function(props) {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>

      <Burger ingredients={props.ingredients}/>

      <Button btnType="Danger" clicked={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;
