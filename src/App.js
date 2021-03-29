import React, { useState } from "react";
import { data } from "./data";
import Card from "./Card";

const App = () => {
  const [title, setTitle] = useState(false);
  const [card, setCard] = useState("");
  const HandleClick = (item) => {
    setCard(item.title);
    setTitle(true);
  };
  return (
    <div>
      <h1>{title ? card : "Title"}</h1>
      <Card data={data} HandleClick={HandleClick} card={card} />
    </div>
  );
};

export default App;
