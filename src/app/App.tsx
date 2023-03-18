import styles from "./App.module.scss";
import {CartProvider} from "../entities/Cart";
import React from "react";
import {Routing} from "./routing";
import {SearchProductProvider} from "../features/searchProduct/store";
import {useAuth} from "../entities/Auth/hooks/useAuth";

function App() {

  const {isAuth } = useAuth()
  console.log(isAuth)


  return  (
    <div className={styles.App}>
      <CartProvider>
        <SearchProductProvider>
          <Routing />
        </SearchProductProvider>
      </CartProvider>
    </div>
  )
}

export default App;
