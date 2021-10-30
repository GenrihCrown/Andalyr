import React from "react";
import { News } from "../news";
import CardItem from "./CardItem.tsx";
import "./Cards.css";

function Cards() {
  const [firstLine, secondLine] = [News.slice(0, 2), News.slice(2)];

  return (
    <div className="cards">
      <h1>Новости</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            {firstLine.map((n) => (
              <CardItem key={n.id} {...n} />
            ))}
          </ul>
          <ul className="cards-items">
            {secondLine.map((n) => (
              <CardItem key={n.id} {...n} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
