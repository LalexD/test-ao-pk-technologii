import React from "react";
import styles from "./Preview.module.css";

const Preview = ({ url }) => {
  return (
    <div className={styles.main}>
      <img src={url} alt="cat_preview" className={styles.preview} />
    </div>
  );
};

export default Preview;
