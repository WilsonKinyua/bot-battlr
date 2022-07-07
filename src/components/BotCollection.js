import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots, clickedBotToArmy}) {
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <BotCard bot={bot} key={bot.id} clickedBotToArmy={clickedBotToArmy} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
