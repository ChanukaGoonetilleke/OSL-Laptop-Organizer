import React, { useState } from "react";

import classes from "./InputForm.module.css";
import Card from "../UI/Card";

const InputForm = () => {
  const [showSubmit, setShowSubmit] = useState(false);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setShowSubmit(!showSubmit);
  };

  return (
    <React.Fragment>
      <Card>
        <form onSubmit={submitHandler}>
          {showSubmit && (
            <div className={classes.form}>
              <label>Type: </label>
              <input
                type="text"
                id="type"
                placeholder="demo number or non demo"
              />
            </div>
          )}
          {showSubmit && (
            <div className={classes.form}>
              <label>Price: </label>
              <input type="number" step="any"  id="price" placeholder="price ..." />
            </div>
          )}
          {showSubmit && (
            <div className={classes.form}>
              <label>UPC: </label>
              <input type="number" id="upc" placeholder="upc ..." />
            </div>
          )}
          {showSubmit && (
            <div className={classes.form}>
              <label>Quantity: </label>
              <input type="number" id="quantity" placeholder="quantity ..." />
            </div>
          )}
          {showSubmit && (
            <div className={classes.form}>
              <label>Description: </label>
              <input
                type="text"
                id="description"
                placeholder="brand, model, specs, color"
              />
            </div>
          )}
          {showSubmit && <button className={classes.button}>Submit</button>}
          {!showSubmit && <button className={classes.button}>Add Item</button>}
        </form>
      </Card>
    </React.Fragment>
  );
};

export default InputForm;
