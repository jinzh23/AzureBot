import React from "react";
import styles from "./ChatbotTurners.module.css";

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <a href="fbpay.html">
            <li className={styles.navLink}>Home</li>
          </a>
          <li className={styles.navLink}>Auctions</li>
          <li className={styles.navLink}>How to Buy</li>
          <li className={styles.navLink}>Find Us</li>
          <li className={styles.navLink}>Sign in</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
