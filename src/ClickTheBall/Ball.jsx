import React from "react";
import styles from "./Ball.module.css";
import VisuallyHidden from "../utils/VisuallyHidden";
const Ball = () => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.ball}
        role="img"
        aria-label="Ball"
        onClick={() => alert("You clicked the ball!")}
      >
        <VisuallyHidden>Ball</VisuallyHidden>
      </div>
    </div>
  );
};

export default Ball;
