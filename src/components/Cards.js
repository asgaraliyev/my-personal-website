import React from "react";
import "./Cards.scss";
import Card from "./OneCard.js";
import { useSelector } from "react-redux";
export default function Cards() {
  const items = useSelector((state) => state.items);
  return (
    <ul id="cards-area">
      {items && (
        <>
          {items.map((card) => {
            if (card.sys.contentType.sys.id === "portfolio") {
              return <Card item={card}></Card>;
            }
          })}
        </>
      )}
    </ul>
  );
}
