import React from "react";
import styles from "./styles.module.css";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";

function Header() {
  return (
    <header>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <div className={styles.searchWrapper}>
          <input type="text" className={styles.inputLocation} />
          <input
            type="text"
            className={styles.inputGuest}
            placeholder="Add Guest"
          />

          <div className={styles.searchButton}>
            <img src={search} alt="Search Button" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
