import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import classes from "./SocialFollow.module.css";

const SocialFollow = () => {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <a
          className={classes.github}
          href="https://github.com/ChanukaGoonetilleke/OSL-Laptop-Organizer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </React.Fragment>
  );
};

export default SocialFollow;
