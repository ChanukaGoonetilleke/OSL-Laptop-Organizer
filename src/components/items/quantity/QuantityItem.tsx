import React, { useState, useEffect } from "react";

import classes from "./QuantityItem.module.css";
import firebaseDB from "../../firebase";

const QuantityItem: React.FC<{ id: string; value: number }> = (props) => {
  let [quantity, setQuantity] = useState(props.value);

  const subOnClickHandler = () => {
    if (quantity > 0) {
      setQuantity(--quantity);
      firebaseDB.child(`items/${props.id}/quantity`).set(quantity, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Success!");
        }
      });
    }
  };

  const addOnClickHandler = () => {
    setQuantity(++quantity);
    firebaseDB.child(`items/${props.id}/quantity`).set(quantity, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success!");
      }
    });
  };

  return (
    <React.Fragment>
      <div className={classes.container}>
        <button onClick={subOnClickHandler} className={classes.button}>
          -
        </button>
        <h2>{quantity}</h2>
        <button onClick={addOnClickHandler} className={classes.button}>
          +
        </button>
      </div>
    </React.Fragment>
  );
};

export default QuantityItem;
