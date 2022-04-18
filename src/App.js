import React from "react";
import { useState, useEffect } from "react";
import "./styles/reset.css";
import "./styles/global.css";

import styles from "./styles/app.module.css";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer/";

function App() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      //destructuring
      .then(({ data }) => {
        setRooms(data);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <Main cards={rooms} />

      <Footer />
    </div>
  );
}

export default App;
