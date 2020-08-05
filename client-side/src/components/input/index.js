import React from "react";
import styles from "./index.module.css";

const Input = ({ label, id, value, onChange }) => {
  return (
    <div className={styles.container}>
      <label
        className={styles.label}
        htmlFor={id}
        value={value}
        onChange={onChange}
      >
        {label}:
        <div>
          <input className={styles.input} id={id} align="middle" />
        </div>
      </label>
    </div>
  );
};

export default Input;
