<script>
export default {
	name: 'StatsDisplay',
	props: {
		player_data: {
			type: Object,
			required: true
		}
	},
	computed: {
		c_xp_to_rank() {
			if(!this.player_data.player_found){
				return 0;
			}
			let xp = this.player_data.rank_xp;
			return this.m_xp_to_rank(xp);
		},
		c_doughnut_bar() {
			if(!this.player_data.player_found){
				return '';
			}
			let a = (this.m_xp_to_rank(this.player_data.rank_xp) / 50) * 360;

			let x1 = 50;
			let y1 = 50;
			
			let x2 = 50;
			let y2 = 0;
			
			let x3 = 50;
			let y3 = 50;
			
			let x4 = 50;
			let y4 = 50;
			
			let x5 = 50;
			let y5 = 50;
			
			let x6 = 50;
			let y6 = 50;
			
			let x7 = 50;
			let y7 = 50;
			
			if(a <= 45){
				x3 = (Math.tan(this.m_degree_to_radian(a)) * 50) + 50;
				y3 = 0;
			}
			if(45 < a && a <= 90){
				x3 = 100;
				y3 = 0;
				x4 = 100;
				y4 = Math.tan(this.m_degree_to_radian(a - 45)) * 50;
			}
			if(90 < a && a <= 135){
				x3 = 100;
				y3 = 0;
				x4 = 100;
				y4 = (Math.tan(this.m_degree_to_radian(a - 90)) * 50) + 50;
			}
			if(135 < a && a <= 180){
				x3 = 100;
				y3 = 0;
				x4 = 100;
				y4 = 100;
				x5 = 100 - (Math.tan(this.m_degree_to_radian(a - 135)) * 50);
				y5 = 100;
			}
			if(180 < a && a <= 225){
				x3 = 100;
				y3 = 0;
				x4 = 100;
				y4 = 100;
				x5 = 50 - (Math.tan(this.m_degree_to_radian(a - 180)) * 50);
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
				y6 = 100 - (Math.tan(this.m_degree_to_radian(a - 225)) * 50);
			}
			if(270 < a && a <= 315){
				x3 = 100;
				y3 = 0;
				x4 = 100;
				y4 = 100;
				x5 = 0;
				y5 = 100;
				x6 = 0;
				y6 = 50 - (Math.tan(this.m_degree_to_radian(a - 270)) * 50);
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
				x7 = Math.tan(this.m_degree_to_radian(a - 315)) * 50;
				y7 = 0;
			}
			
			let output = "polygon(" 
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
		},
		c_rank_progress_bar() {
			if(!this.player_data.player_found){
				return 0;
			}
			let progress = this.m_rank_min_max(this.m_xp_to_rank(this.player_data.rank_xp));
			return `${( (this.player_data.rank_xp - progress.min) / (progress.max - progress.min) ) * 100}%`;
		}
	},
	data() {
		return {
			rank_table: [
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
			player_class: 'Light'
		}
	},
	methods: {
		m_degree_to_radian(deg = 0) {
			return deg * (Math.PI / 180);
		},
		m_xp_to_rank(xp = 0) {
			if(xp < 0){
				xp = 0;
			}
			let found = false;
			this.rank_table.forEach(function(r, i) {
				if(!found){
					if(xp >= r.xp){
					}else{
						found = this.rank_table[i - 1];
					}
				}
			}.bind(this));
			return (!found ? 0 : found['level']);
		},
		m_rank_min_max(rank) {
			let output = {min: 0, max: 0};
			if(rank >= this.rank_table.length - 1){
				output.min = this.rank_table[this.rank_table.length - 1].xp;
				output.max = this.rank_table[this.rank_table.length - 1].xp;
			}else{
				output.min = this.rank_table[rank].xp;
				output.max = this.rank_table[rank + 1].xp;
			}
			return output;
		}
	},
	mounted() {
	}
}
</script>

<template>
	<div class="stats_display">
		<div v-if="player_data.player_found" class="inner">
			<div class="left">
				<div class="player_title">
					<img :src="`https://wilderzone.live/assets/images/ranks/${c_xp_to_rank}.png`" alt="">
					<div>
						<h1>{{ `[${player_data.clan_tag}] ${player_data.player_name}` }}</h1>
						<p style="font-size:1.1rem;">{{ `${rank_table[c_xp_to_rank].name}&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;Rank ${c_xp_to_rank}` }}</p>
					</div>
				</div>
				<div class="player_class">
					<img v-if="player_class == 'Light'" src="@/assets/images/BE_Light_01.png" alt="">
					<img v-else-if="player_class == 'Medium'" src="@/assets/images/BE_Medium_01.png" alt="">
					<img v-else-if="player_class == 'Heavy'" src="@/assets/images/BE_Heavy_01.png" alt="">
					<span :data="player_class">{{ player_class }}</span>
				</div>
			</div>
			<div class="right">
				<div class="progress_doughnut">
					<span></span>
					<span></span>
					<span class="doughnut_bar" :style="{clipPath: c_doughnut_bar}"></span>
					<div>
						<img :src="`https://wilderzone.live/assets/images/ranks/${c_xp_to_rank}.png`" alt="">
						<p>{{ c_xp_to_rank }}</p>
					</div>
				</div>
				<div class="progress_bar">
					<span :style="{width: c_rank_progress_bar}"></span>
					<p>Rank XP: {{ player_data.rank_xp }}</p>
				</div>
				<div style="width:100%;">
					<div v-for="stat in Object.keys(player_data.tbd)" :key="stat" class="small_stat">{{ `${stat}: ${player_data.tbd[stat]}` }}</div>
				</div>
			</div>
		</div>

		<div v-else class="overlay">Player not found.</div>
	</div>
</template>

<style scoped>
.stats_display {
	--progress_doughnut_size: 200px;
	--progress_doughnut_bar_color: currentColor;
	--progress_doughnut_border_color: currentColor;

	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	width: clamp(250px, 90%, 1000px);
	min-height: 300px;
	color: white;
	font-family: 'Ovo', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	background-color: #2c2928;
	border-radius: 10px;
	box-shadow: 0px 3px 10px -6px black,
				0px 3px 30px -20px black,
				0px 0px 30px -14px #fff8 inset;
}
.stats_display > .inner {
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 100%;
	padding: 2rem;
}
.stats_display h1 {
	font-family: inherit;
	font-size: 2.7rem;
}
.stats_display p {
	font-family: inherit;
}
.stats_display .left,
.stats_display .right {
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
	gap: 2rem;
	width: 50%;
	height: 100%;
}
.stats_display .left {
	width: 60%;
}
.stats_display .right {
	width: clamp(280px, 40%, 40%);
	padding: 0.5rem;
	border: 1px solid #fff2;
	border-radius: 5px;
}
.stats_display .player_title {
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
}
.stats_display .player_title > div {
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	padding: 0px 1rem;
}
.stats_display .player_class img {
	width: clamp(100px, 100%, 500px);
	margin-left: -18%;
	filter: drop-shadow(0px 3px 8px #0006)
			drop-shadow(0px 3px 17px #0001);
}
.stats_display .player_class span {
	position: absolute;
	z-index: 2;
	top: 2rem;
	right: 25%;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 6rem;
	aspect-ratio: 1;
	font-size: 1.5rem;
	text-align: center;
	border-radius: 50%;
	filter: drop-shadow(0px 3px 8px #0006)
			drop-shadow(0px 3px 17px #0001);
}
.stats_display .player_class span[data="Light"] {
	color: black;
	background-color: #00e0eb;
}
.stats_display .player_class span[data="Medium"] {
	color: white;
	background-color: #009172;
}
.stats_display .player_class span[data="Heavy"] {
	color: white;
	background-color: #dc0000;
}
.stats_display .player_class span::before {
	content: 'MOST PLAYED:';
	position: absolute;
	top: -1.7rem;
	display: block;
	color: white;
	font-size: 0.7rem;
	text-align: center;
}
.stats_display .overlay {
	position: absolute;
	z-index: 2;
	inset: 0px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	font-size: 1.3rem;
	font-style: italic;
}

.small_stat {
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 24px;
	min-height: 24px;
	max-height: 24px;
	padding: 3px 10px 3px 10px;
	text-transform: capitalize;
	border-radius: 3px;
	transition: 0.1s ease all;
}
.small_stat:hover {
	background-color: #FCFBFB20;
}
.small_stat p {
	font-size: 14px;
}

.progress_doughnut {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: var(--progress_doughnut_size);
	min-width: var(--progress_doughnut_size);
	max-width: var(--progress_doughnut_size);
	height: var(--progress_doughnut_size);
	min-height: var(--progress_doughnut_size);
	max-height: var(--progress_doughnut_size);
	margin: 5px 5px 20px 5px;
	border-radius: 50%;
	/* box-shadow: 0px 1px 3px black; */
	user-select: none;
}
.doughnut_bar {
	position: absolute;
	z-index: 0;
	display: block;
	width: 100%;
	height: 100%;
	background: radial-gradient(circle, transparent 55%, var(--progress_doughnut_bar_color) 30%);
	border-radius: 50%;
	clip-path: polygon(50% 50%, 50% 0%, 0% 0%, 50% 0%);
	transition: 0.5s linear all;
}
.progress_doughnut span:nth-child(1) {
	position: absolute;
	z-index: 1;
	width: 100%;
	height: 100%;
	border: 1px solid var(--progress_doughnut_border_color);
	border-radius: 50%;
}
.progress_doughnut span:nth-child(2) {
	position: absolute;
	z-index: 1;
	width: 78%;
	height: 78%;
	border: 1px solid var(--progress_doughnut_border_color);
	border-radius: 50%;
}
.progress_doughnut div {
	position: absolute;
	z-index: 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.progress_doughnut div img {
	width: 80px;
	height: 80px;
}
.progress_doughnut div p {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: min-content;
	margin: unset;
	margin-top: -5px;
	color: inherit;
	font-size: 32px;
	font-weight: 100;
}
.progress_doughnut div p::after {
	content: "RANK";
	position: absolute;
	top: -8px;
	color: inherit;
	font-size: 10px;
	font-weight: bold;
}

.progress_bar {
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	width: var(--progress_doughnut_size);
	height: 10px;
	margin: 0px 0px 2rem 0px;
	border: 1px solid var(--progress_doughnut_border_color);
	border-radius: 5px;
}
.progress_bar span {
	display: block;
	width: 0%;
	height: 100%;
	background-color: var(--progress_doughnut_bar_color);
	border-radius: 5px;
	transition: 0.5s ease all;
}
.progress_bar p {
	position: absolute;
	top: 100%;
	left: 0px;
	display: block;
	padding-top: 0.3rem;
	font-size: 0.8rem;
	opacity: 0.8;
}
</style>
