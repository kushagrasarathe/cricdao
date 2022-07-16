import React, { useState } from "react";
import styles from "../styles/Account.module.css";
import Image from "next/image";
import pfp from "../src/assets/avatar.png";

export default function account() {
  const [toggleState, setToggleState] = useState(1);

  function toggleTab(index) {
    setToggleState(index)
}

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.pfp}>
          <Image src={pfp} className={styles.pfp} />
        </div>

        <div className={styles.content}>
          <h1>Kushagra Sarathe</h1>
          <ul>
            <li>Address</li>
            <li>Balance</li>
            <li>Rewards Earned</li>
            <li>NFTs Owned</li>
            <li>Matches Played</li>
          </ul>
          <p></p>
        </div>
      </main>

      <div className={styles.stats_section}>
        <div className={styles.tabs_section}>
          <div
            onClick={ () => toggleTab(1)}
            className={`${styles.tabs} ${styles.active_tab}`}
          >
            Tab1
          </div>
          <div className={styles.tabs}>Tab2</div>
        </div>

        <div className={styles.content_tabs}>
          <div className={`${styles.content} ${styles.active_content}`}>
            <h2>Content1</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              fugiat, exercitationem ducimus cumque eveniet ullam quam ex illo
              amet dignissimos explicabo architecto eum vero minus, debitis iure
              accusamus. Provident, unde?
            </p>
          </div>

          <div className={`${styles.content}`}>
            <h2>Content2</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              fugiat, exercitationem ducimus cumque eveniet ullam quam ex illo
              amet dignissimos explicabo architecto eum vero minus, debitis iure
              accusamus. Provident, unde?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
