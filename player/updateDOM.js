function updateDOM(){
  var player_rank = XPRank.xpToRank(player_data.rank_xp)["level"];
  var player_rank_xp_bounds = XPRank.rankMinMax(player_rank);

  document.querySelector("main stuff").innerHTML = (
    Lightshard.blocks.h1(player_data.player_name) +
    Lightshard.blocks.info("Rank XP: " + player_data.rank_xp) +
    Lightshard.blocks.info("Rank: " + XPRank.xpToRank(player_data.rank_xp)["name"])
  );

  
  document.querySelector("#doughnut_text").innerHTML = player_rank;
  document.querySelector("#doughnut_image").src = "https://wilderzone.live/assets/images/ranks/" + player_rank + ".webp";
  document.querySelector("#doughnut_bar").style.clipPath = calculateBarPolygon(0);
  document.querySelector("progress_bar span").style.width = "0%";
  
  window.setTimeout(function(){
    document.querySelector("#doughnut_bar").style.clipPath = calculateBarPolygon(360 * (player_rank) / 50);
  }, 200);

  window.setTimeout(function(){
    var rank_progress = ((player_data.rank_xp - player_rank_xp_bounds.min) / (player_rank_xp_bounds.max - player_rank_xp_bounds.min)) * 100;
    document.querySelector("progress_bar span").style.width = rank_progress + "%";
  }, 400);
}














function calculateBarPolygon(a = 0){
  var x1 = 50;
  var y1 = 50;
  
  var x2 = 50;
  var y2 = 0;
  
  var x3 = 50;
  var y3 = 50;
  
  var x4 = 50;
  var y4 = 50;
  
  var x5 = 50;
  var y5 = 50;
  
  var x6 = 50;
  var y6 = 50;
  
  var x7 = 50;
  var y7 = 50;
  
  if(a <= 45){
      x3 = (Math.tan(Lightshard.functions.degreeToRadian(a)) * 50) + 50;
      y3 = 0;
  }
  if(45 < a && a <= 90){
      x3 = 100;
      y3 = 0;
      x4 = 100;
      y4 = Math.tan(Lightshard.functions.degreeToRadian(a - 45)) * 50;
  }
  if(90 < a && a <= 135){
      x3 = 100;
      y3 = 0;
      x4 = 100;
      y4 = (Math.tan(Lightshard.functions.degreeToRadian(a - 90)) * 50) + 50;
  }
  if(135 < a && a <= 180){
      x3 = 100;
      y3 = 0;
      x4 = 100;
      y4 = 100;
      x5 = 100 - (Math.tan(Lightshard.functions.degreeToRadian(a - 135)) * 50);
      y5 = 100;
  }
  if(180 < a && a <= 225){
      x3 = 100;
      y3 = 0;
      x4 = 100;
      y4 = 100;
      x5 = 50 - (Math.tan(Lightshard.functions.degreeToRadian(a - 180)) * 50);
      y5 = 100;
  }
  if(225 < a && a <= 270){
      x3 = 100;
      y3 = 0;
      x4 = 100;
      y4 = 100;
      x5 = 0;
      y5 = 100;
      x6 = 0;
      y6 = 100 - (Math.tan(Lightshard.functions.degreeToRadian(a - 225)) * 50);
  }
  if(270 < a && a <= 315){
      x3 = 100;
      y3 = 0;
      x4 = 100;
      y4 = 100;
      x5 = 0;
      y5 = 100;
      x6 = 0;
      y6 = 50 - (Math.tan(Lightshard.functions.degreeToRadian(a - 270)) * 50);
  }
  if(315 < a && a <= 360){
      x3 = 100;
      y3 = 0;
      x4 = 100;
      y4 = 100;
      x5 = 0;
      y5 = 100;
      x6 = 0;
      y6 = 0;
      x7 = Math.tan(Lightshard.functions.degreeToRadian(a - 315)) * 50;
      y7 = 0;
  }
  
  var output = "polygon(" 
             + (Math.round(x1 * 1000) / 1000) + "% "
             + (Math.round(y1 * 1000) / 1000) + "%, "
             + (Math.round(x2 * 1000) / 1000) + "% "
             + (Math.round(y2 * 1000) / 1000) + "%, "
             + (Math.round(x3 * 1000) / 1000) + "% "
             + (Math.round(y3 * 1000) / 1000) + "%, "
             + (Math.round(x4 * 1000) / 1000) + "% "
             + (Math.round(y4 * 1000) / 1000) + "%, "
             + (Math.round(x5 * 1000) / 1000) + "% "
             + (Math.round(y5 * 1000) / 1000) + "%, "
             + (Math.round(x6 * 1000) / 1000) + "% "
             + (Math.round(y6 * 1000) / 1000) + "%, "
             + (Math.round(x7 * 1000) / 1000) + "% "
             + (Math.round(y7 * 1000) / 1000) + "%"
             + ")";
  
  return output;
}