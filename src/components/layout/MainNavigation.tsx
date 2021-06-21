import React from "react";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <React.Fragment>
      <nav className={classes["navbar"]}>
        <div className={classes["nav-container"]}>
          <h1>OSL Laptop Organizer</h1>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default MainNavigation;
