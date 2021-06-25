import React from "react";

import classes from "./Layout.module.css";

import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

const Layout: React.FC<{}> = (props) => {
  return (
    <React.Fragment>
      <div className={classes.pageContainer}>
        <div className={classes.contentWrap}>
          <MainNavigation />
          <main className={classes.main}>{props.children}</main>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
