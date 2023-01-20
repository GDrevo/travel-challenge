import React from "react";
import Card from "./Card";
import data from "../data";

export default function CardList() {
  const cards = data.map(attraction => {
    return (
      <Card
        key={attraction.id}
        attraction={attraction}
      />
    )
  })
  return (
    <div className="card-list">
      {cards}
    </div>
  )
}
