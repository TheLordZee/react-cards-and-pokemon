import React from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import useFlip from "./hooks/useFlip";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isUp, toggleIsUp] = useFlip(true)
  return (
    <img
      src={isUp ? front : back}
      alt="playing card"
      onClick={toggleIsUp}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
