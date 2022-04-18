import React from "react";
import styles from "./styles.module.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card(props) {
  const { data } = props;
  console.log(data);
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={data.photo} alt="Bnb Image" />
      </div>

      <div className={styles.roomInfo}>
        <div className={styles.property}>
          {data.superHost === true && (
            <p className={styles.superHost}>Super Host </p>
          )}
          <p className={styles.roomType}>{data.type}</p>
          <div className={styles.rating}>
            <FontAwesomeIcon icon={faStar} />
            <p className={styles.ratingNumber}>{data.rating}</p>
          </div>
        </div>
        <p className={styles.roomTitle}>{data.title}</p>
      </div>
    </div>
  );
}

export default Card;
