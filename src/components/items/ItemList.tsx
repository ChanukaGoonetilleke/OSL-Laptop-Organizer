import React from 'react';

import classes from './ItemList.module.css';

import Item from './Item';

const ItemList: React.FC <{items: any}> = (props) => {

    return (
        <ul className={classes['movies-list']}>
            {props.items.map((item:any) => (
                <Item 
                    key={item.id}
                    type={item.type}
                    price={item.price}
                    upc={item.upc}
                    quantity={item.quantity}
                    description={item.description}
                />
            ))}
        </ul>
    );

}

export default ItemList;