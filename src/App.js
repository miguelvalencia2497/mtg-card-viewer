import React, { useState, useEffect } from "react";

import Button from "./Button";
import Card from "./Card";
import Loader from "./Loader";
import mtg from "mtgsdk";

import "./styles.css";

const getRandomCard = () => {
  mtg.card.find(3).then((result) => {
    console.log(result.card); // "Black Lotus"
  });
};

const App = () => {
  const [state, setState] = useState({
    loading: false,
    card: {}
  });

  useEffect(() => {
    // getRandomCard();
  }, []);

  return (
    <div>
      <Loader />
      <br />
      <Card />
      <br />
      ---- components to implement -----
      <br />
      <br />
      <Button onClick={getRandomCard}>Hello</Button>
    </div>
  );
};

export default App;
