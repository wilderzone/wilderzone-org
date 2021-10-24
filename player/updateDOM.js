function updateDOM(){
  document.querySelector("main").innerHTML = (
    Lightshard.blocks.h1(player_data.player_name) +
    Lightshard.blocks.info("Rank XP: " + player_data.rank_xp) +
    Lightshard.blocks.info("Rank: " + xpToRank(player_data.rank_xp)["name"])
  );
}