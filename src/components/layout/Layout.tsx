import React from "react";

import classes from "./Layout.module.css";

import MainNavigation from "./MainNavigation";

const Layout: React.FC<{}> = (props) => {
  return (
    <React.Fragment>
      <div className={classes.pageContainer}>
        <div className={classes.contentWrap}>
          <MainNavigation />
          <main className={classes.main}>{props.children}</main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
