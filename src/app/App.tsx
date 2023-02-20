import styles from "./App.module.scss";
import {CartProvider} from "../entities/Cart";
import React from "react";
import {Routing} from "./routing";

function App() {

  return <div className={styles.App}>
    <CartProvider>
      <Routing />
    </CartProvider>
  </div>;
}

export default App;
