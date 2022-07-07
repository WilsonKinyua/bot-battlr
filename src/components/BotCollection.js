import React from "react";
import BotCard from "./BotCard";

function BotCollection(props) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {props.bots.map((bot) => (
          <BotCard bot={bot} key={bot.id} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
