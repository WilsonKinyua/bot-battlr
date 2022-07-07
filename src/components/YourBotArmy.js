import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({botsArmy}) {
  //your bot army code here...
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
        {botsArmy.map((bot) => (
          <BotCard bot={bot} key={bot.id}/>
        ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
