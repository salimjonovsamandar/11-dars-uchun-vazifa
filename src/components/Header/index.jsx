import React from "react";
import styles from "../Header/index.module.css";

function index() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.nav}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className={styles.loading}>Landing</div>
        <div className={styles.buy}>
          <button className={styles.btn}>Buy Now</button>
        </div>
      </div>
      <div className={styles.main}>
        <h3>Introduce Your Product Quickly & Effectively</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <button className={styles.purchase}>Purchase UI Kit</button>
        <button className={styles.learn}>Learn More</button>
      </div>
    </div>
  );
}

export default index;
