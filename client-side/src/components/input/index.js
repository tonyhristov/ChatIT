import React from "react";
import styles from "./index.module.css";

const Input = ({ label, id, value, onChange, type }) => {
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
          <input
            type={type || "text"}
            className={styles.input}
            id={id}
            align="middle"
          />
        </div>
      </label>
    </div>
  );
};

export default Input;
