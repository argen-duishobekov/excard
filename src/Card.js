import React from "react";
import css from "./index.css"

const Card = ({ data, HandleClick, card }) => {
  return (
    <div className={css.card}>
      {data.map((item) => {
        return (
          <div>
            <h2 className="title">{item.title}</h2>
            <h3 className="price">{item.price}</h3>
            <img className={css.img}  src={item.img} alt="" onClick={() => HandleClick(item)} />
          </div>
        );
      })}
    </div>
  );
};

export default Card;
