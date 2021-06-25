import React from "react";

import classes from "./Footer.module.css";

import SocialFollow from "./SocialFollow";

const Footer = () => {
  const year: number = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <SocialFollow />
      <p className={classes.name}>
        CHANUKA GOONETILLEKE <span className={classes.date}>@{year}</span>
      </p>
    </footer>
  );
};

export default Footer;
