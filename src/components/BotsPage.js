import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  const addBotToArmyHandler = (bot) => {
    // check if bot is already in army
    if (botArmy.find((b) => b.id === bot.id)) {
      return;
    }
    setBotArmy([...botArmy, bot]);
  };

  // remove bot from my bot section
  const removeBotFromMyArmy = (bot) => {
    setBotArmy(botArmy.filter((b) => b.id !== bot.id));
  };

  // delete clicked bot from database and remove from my bot army list if it is in it and update the bots list
  const deleteBotFromDatabase = (bot) => {
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        removeBotFromMyArmy(bot);
        setBots(bots.filter((b) => b.id !== bot.id));
      }
      );
  }

  return (
    <div>
      <YourBotArmy botsArmy={botArmy} clickedBotToArmy={removeBotFromMyArmy} deleteBotFromDatabase={deleteBotFromDatabase} />
      <BotCollection bots={bots} clickedBotToArmy={addBotToArmyHandler} deleteBotFromDatabase = {deleteBotFromDatabase} />
    </div>
  );
}

export default BotsPage;
