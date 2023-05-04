import React from "react";
import styles from "./ChatbotTurners.module.css";

const ContainerLeft = () => {
  return (
    <div>
      <main className={styles.content}>
        <div className={styles.logoImage}></div>
        <h1 className={styles.title}>TURNERS CAR INSURANCE</h1>
        <p>
          Get Car Insurance from the car experts. It’s quick, easy and
          affordable.
        </p>
        <iframe
          width="350"
          height="430"
          allow="microphone;"
          src="https://console.dialogflow.com/api-client/demo/embedded/d4432dc1-eb26-4d44-b5d9-7dda2148aa6d"
        ></iframe>
        <br />
        <a href="http://facebook.com">
          <i class="fa fa-facebook-square fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/">
          <i class="fa fa-linkedin-square fa-2x"></i>
        </a>
      </main>
    </div>
  );
};

export default ContainerLeft;
