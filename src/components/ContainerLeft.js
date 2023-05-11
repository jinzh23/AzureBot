import React from "react";
import styles from "./ChatbotTurners.module.css";

const ContainerLeft = () => {
  return (
    <div>
      <main className={styles.content}>
        <div className={styles.logoImage}></div>
        <h1 className={styles.title}>WELCOME TO TURNERS CAR</h1>
        <p>
          Get Car Insurance from the car experts. It’s quick, easy and
          affordable.
        </p>
        <iframe
          width="350"
          height="430"
          src="https://webchat.botframework.com/embed/TurnerBot-bot?s=4ZRtGmMUzq4.ZfD4d5ebBt8p9JSM_0Grnb-y4gAFeEcapcc4AmF5MgQ"
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
