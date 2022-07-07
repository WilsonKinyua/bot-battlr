import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots, clickedBotToArmy, deleteBotFromDatabase}) {
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <BotCard bot={bot} key={bot.id} clickedBotToArmy={clickedBotToArmy} deleteBotFromDatabase={deleteBotFromDatabase} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
