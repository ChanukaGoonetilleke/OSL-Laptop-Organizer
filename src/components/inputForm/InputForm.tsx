import React, { useState, useRef } from "react";

import classes from "./InputForm.module.css";
import Card from "../UI/Card";

const InputForm: React.FC<{onAddItem: (item:any) => void}> = (props) => {
  const [showSubmit, setShowSubmit] = useState(false);

  const typeRef=useRef<HTMLInputElement>(null);
  const priceRef=useRef<HTMLInputElement>(null);
  const upcRef=useRef<HTMLInputElement>(null);
  const quantityRef=useRef<HTMLInputElement>(null);
  const descriptionRef=useRef<HTMLInputElement>(null);


  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if(showSubmit){
      const item = {
        type: typeRef.current!.value,
        price: priceRef.current!.value,
        upc: upcRef.current!.value,
        quantity: quantityRef.current!.value,
        description: descriptionRef.current!.value,
      };
      
      props.onAddItem(item);
    }

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
                ref={typeRef}
                
              />
            </div>
          )}
          {showSubmit && (
            <div className={classes.form}>
              <label>Price: </label>
              <input type="number" step="any"  id="price" placeholder="price ..." ref={priceRef} />
            </div>
          )}
          {showSubmit && (
            <div className={classes.form}>
              <label>UPC: </label>
              <input type="number" id="upc" placeholder="upc ..." ref={upcRef} />
            </div>
          )}
          {showSubmit && (
            <div className={classes.form}>
              <label>Quantity: </label>
              <input type="number" id="quantity" placeholder="quantity ..." ref={quantityRef} />
            </div>
          )}
          {showSubmit && (
            <div className={classes.form}>
              <label>Description: </label>
              <input
                type="text"
                id="description"
                placeholder="brand, model, specs, color"
                ref={descriptionRef}
                
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
