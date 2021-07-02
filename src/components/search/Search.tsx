import React, { useState, useEffect, useRef } from "react";

import classes from "./Search.module.css";

const Search: React.FC<{ onLoadItems: (items: any) => void }> = React.memo(
  (props) => {
    const { onLoadItems } = props;
    const [enteredFilter, setEnteredFilter] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      const timer = setTimeout(() => {
        if (enteredFilter === inputRef.current!.value) {
          const query =
            enteredFilter.length === 0
              ? ""
              : `?orderBy="upc"&startAt="${enteredFilter}"&endAt="${enteredFilter}uf8ff"`;
          fetch(
            "https://osl-inventory-default-rtdb.firebaseio.com/items.json" +
              query
          )
            .then((response) => response.json())
            .then((responseData) => {
              const loadedItems = [];
              for (const key in responseData) {
                loadedItems.push({
                  id: key,
                  type: responseData[key].type,
                  price: responseData[key].price,
                  upc: responseData[key].upc,
                  quantity: responseData[key].quantity,
                  description: responseData[key].description,
                });
              }
              props.onLoadItems(loadedItems);
            });
        }
      }, 500);
      return () => {
        clearTimeout(timer);
      };
    }, [enteredFilter, onLoadItems, inputRef]);

    return (
      <React.Fragment>
        <div className={classes.search}>
          <input
            type="text"
            value={enteredFilter}
            onChange={(event) => setEnteredFilter(event.target.value)}
            placeholder="Search UPC"
            ref={inputRef}
          ></input>
        </div>
      </React.Fragment>
    );
  }
);

export default Search;
