import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

const LinkComponent = ({ title, href, type }) => {
  return (
    <div>
      <Link to={href} className={styles[`${type}-list-item`]}>
        {title}
      </Link>
    </div>
  );
};

export default LinkComponent;
