import React from "react";
import styles from "./styles.module.css";
import Card from "../card";

function Main(props) {
  const { cards } = props;
  console.log(cards);
  return (
    <main>
      <div className={styles.mainTitle}>
        <h2>Stays in Finland</h2>
        <p>12+ stays</p>
      </div>
      <div className={styles.cardWrapper}>
        {cards.length > 0
          ? cards.map((card) => <Card data={card} />)
          : "Loading"}
      </div>
    </main>
  );
}

export default Main;
