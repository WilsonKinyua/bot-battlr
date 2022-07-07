import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots, addBotToArmy}) {
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <BotCard bot={bot} key={bot.id} addBotToArmy={addBotToArmy} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
