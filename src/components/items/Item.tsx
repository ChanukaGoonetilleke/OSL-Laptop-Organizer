import React from 'react';

import classes from './Item.module.css';
import QuantityItem from './quantity/QuantityItem';

const Item: React.FC<{type: string, price:number,upc:number,quantity:number,description:string}> = (props) => {
    return (
        <li className={classes.movie}>
            <h3>Type: <span>{props.type}</span></h3>
            <h3>Price: <span>${props.price}</span></h3>
            <h3>UPC: <span>{props.upc}</span></h3>
            <h3>Description: <span>{props.description}</span></h3>
            <QuantityItem value={props.quantity}/>
        </li>
    );
}

export default Item;