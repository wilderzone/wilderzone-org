const XPRank = {
  xpToRank: function (xp) {
    if(xp < 0){xp = 0;}
    var found = false;
    this.ranks.forEach((r, i) => {
      if(found === false){
        if(xp >= r.xp){
        }else{
          found = this.ranks[i - 1];
        }
      }
    });
    return (found === false ? this.ranks[50] : found);
  },

  ranks: [
    {"level": 0, "name": "Unknown", "xp": -1},
    {"level": 1, "name": "Recruit", "xp": 0},
    {"level": 2, "name": "Cadet", "xp": 1350},
    {"level": 3, "name": "Cadet First Class", "xp": 2781},
    {"level": 4, "name": "Squadman I", "xp": 4298},
    {"level": 5, "name": "Squadman II", "xp": 5906},
    {"level": 6, "name": "Squadman III", "xp": 11212},
    {"level": 7, "name": "Senior Squadman", "xp": 16836},
    {"level": 8, "name": "Squad Leader", "xp": 22798},
    {"level": 9, "name": "Bannerman", "xp": 31741},
    {"level": 10, "name": "Legionary I", "xp": 41130},
    {"level": 11, "name": "Legionary II", "xp": 50990},
    {"level": 12, "name": "Legionary III", "xp": 61342},
    {"level": 13, "name": "Senior Legionary", "xp": 76870},
    {"level": 14, "name": "Sworn Sword", "xp": 93020},
    {"level": 15, "name": "Specialist I", "xp": 109815},
    {"level": 16, "name": "Specialist II", "xp": 127283},
    {"level": 17, "name": "Specialist III", "xp": 145449},
    {"level": 18, "name": "Senior Specialist", "xp": 172698},
    {"level": 19, "name": "Tech Specialist", "xp": 200673},
    {"level": 20, "name": "Lieutenant I", "xp": 229673},
    {"level": 21, "name": "Lieutenant II", "xp": 259449},
    {"level": 22, "name": "Lieutenant III", "xp": 290118},
    {"level": 23, "name": "Senior Lieutenant", "xp": 321707},
    {"level": 24, "name": "Lieutenant Commander", "xp": 369091},
    {"level": 25, "name": "Commander I", "xp": 417896},
    {"level": 26, "name": "Commander II", "xp": 468166},
    {"level": 27, "name": "Commander III", "xp": 519943},
    {"level": 28, "name": "Senior Commander", "xp": 573274},
    {"level": 29, "name": "Knight Commander", "xp": 628205},
    {"level": 30, "name": "Captain I", "xp": 684783},
    {"level": 31, "name": "Captain II", "xp": 743059},
    {"level": 32, "name": "Captain III", "xp": 803084},
    {"level": 33, "name": "Senior Captain", "xp": 864909},
    {"level": 34, "name": "Knight Captain", "xp": 928589},
    {"level": 35, "name": "Marshal I", "xp": 994179},
    {"level": 36, "name": "Marshal II", "xp": 1061737},
    {"level": 37, "name": "Marshal III", "xp": 1131321},
    {"level": 38, "name": "High Marshal", "xp": 1202994},
    {"level": 39, "name": "Holdfast Lord", "xp": 1276816},
    {"level": 40, "name": "Champion I", "xp": 1352853},
    {"level": 41, "name": "Champion II", "xp": 1431171},
    {"level": 42, "name": "Champion III", "xp": 1511839},
    {"level": 43, "name": "Champion IV", "xp": 1594926},
    {"level": 44, "name": "Champion V", "xp": 1680507},
    {"level": 45, "name": "Fusor", "xp": 1768654},
    {"level": 46, "name": "Ghost", "xp": 1859447},
    {"level": 47, "name": "Warlord", "xp": 1952963},
    {"level": 48, "name": "Collosus", "xp": 2049284},
    {"level": 49, "name": "Avenger", "xp": 2148495},
    {"level": 50, "name": "Immortal", "xp": 2250682}
  ],

  min_rank: function () {this.ranks[1].level},
  min_xp: function () {this.ranks[1].xp},
  max_rank: function () {this.ranks[this.ranks.length - 1].level},
  max_xp: function () {this.ranks[this.ranks.length - 1].xp},

  rankMinMax: function (rank) {
    var output = {min: 0, max: 0};
    if(rank >= this.ranks.length - 1){
      output.min = this.ranks[this.ranks.length - 1].xp;
      output.max = this.ranks[this.ranks.length - 1].xp;
    }else{
      output.min = this.ranks[rank].xp;
      output.max = this.ranks[rank + 1].xp;
    }
    return output;
  }
}