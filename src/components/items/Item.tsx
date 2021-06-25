import React from "react";

import classes from "./Item.module.css";
import QuantityItem from "./quantity/QuantityItem";

const Item: React.FC<{
  id: string;
  type: string;
  price: number;
  upc: number;
  quantity: number;
  description: string;
}> = (props) => {
  return (
    <React.Fragment>
      <li className={classes.movie}>
        <h3>
          Type: <span>{props.type}</span>
        </h3>
        <h3>
          Price: <span>${props.price}</span>
        </h3>
        <h3>
          UPC: <span>{props.upc}</span>
        </h3>
        <h3>
          Description: <span>{props.description}</span>
        </h3>
        <QuantityItem id={props.id} value={props.quantity} />
      </li>
    </React.Fragment>
  );
};

export default Item;
