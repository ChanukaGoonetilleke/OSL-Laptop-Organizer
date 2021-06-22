import React, {useState} from 'react';

import classes from './QuantityItem.module.css';

const QuantityItem: React.FC<{value:number}> = (props) => {
    const [quantity, setQuantity] = useState(props.value);

    const subOnClickHandler = () => {
        setQuantity(quantity-1);
    }

    const addOnClickHandler = () => {
        setQuantity(quantity+1);
    }

    return (
        <React.Fragment>
                <div className={classes.container}>
                <button onClick={subOnClickHandler} className={classes.button}>-</button>
                <h2>{quantity}</h2>
                <button onClick={addOnClickHandler} className={classes.button}>+</button>
                </div>
        </React.Fragment>
    );
}

export default QuantityItem;