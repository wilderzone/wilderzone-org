<script setup>
import $ from 'jquery'
import ParallaxContainer from '@/components/ParallaxContainer.vue'
import ParallaxGroup from '@/components/ParallaxGroup.vue'
import ParallaxLayer from '@/components/ParallaxLayer.vue'
import SimpleButton from '@/components/SimpleButton.vue'
import PlayerSearchBox from '@/components/PlayerSearchBox.vue'
import StatsDisplay from '@/components/StatsDisplay.vue'
</script>

<script>
export default {
	data() {
		return {
			data_fetch_enabled: true,
			player_data: {}
		}
	},
	methods: {
		m_get_server_data() {
			if(this.data_fetch_enabled){
				this.data_fetch_enabled = false;
				$.ajax({
					context: this,
					dataType: 'json',
					url: '/data/dummy_data.json',
					cache: true,
					success: function(data1) {
						this.player_data = data1;
						this.data_fetch_enabled = true;
					},
					error: function(xhr) {
						console.log(`Error ${xhr.status}`);
						this.data_fetch_enabled = true;
					}
				});
			}
		}
	},
	mounted() {
		this.m_get_server_data();
	}
}
</script>

<template>
	<ParallaxContainer id="ParallaxContainer">

		<!--============================== Home ==============================-->
		<ParallaxGroup :height="`100vh`" color="#F0EDEA" style="border-bottom: 5px solid #FF4B00;">

			<ParallaxLayer :height="`100%`" :z_index="1" :start="`0%`" :scroll_speed="65">
				<img src="https://wilderzone.live/assets/images/backgrounds/drydock_d1-2.webp" draggable="false" alt="" style="width:100%;height:100%;object-fit:cover;opacity:0.15;filter:blur(3px);">
			</ParallaxLayer>

			<ParallaxLayer :height="`100%`" :z_index="1" :start="`0%`" :scroll_speed="100">
				<img src="https://wilderzone.live/assets/images/wilderzone_logo_symbol_black_small.png" draggable="false" alt="">
				<h1 style="color:black;">Wilderzone</h1>
				<p style="color:black;">Welcome to the Wilderzone.org Restoration Project</p>
				<p style="color:black;">You can find out more info about this project on the <b>Tribes Ascend Community Hub</b> Discord server.</p>
				<br>
				<PlayerSearchBox />
			</ParallaxLayer>

		</ParallaxGroup>


		<!--============================== Player ==============================-->
		<ParallaxGroup :height="`100vh`" color="#F0EDEA" style="border-top: 5px solid #FF4B00;">

			<ParallaxLayer :height="`100%`" :z_index="1" :start="`0%`" :scroll_speed="65">
				<img src="https://wilderzone.live/assets/images/backgrounds/drydock_ds_flag.webp" draggable="false" alt="" style="width:100%;height:100%;object-fit:cover;opacity:0.15;filter:blur(3px);">
			</ParallaxLayer>

			<ParallaxLayer :height="`100%`" :z_index="1" :start="`-50px`" :scroll_speed="100">
				<StatsDisplay :player_data="player_data" />
			</ParallaxLayer>

		</ParallaxGroup>


		<!--============================== Footer ==============================-->
		<footer>
			<div class="inner">
				<img src="https://wilderzone.live/assets/images/wilderzone_logo_symbol_lightgrey_small.png" draggable="false" alt="" width="70" style="top:-50%;filter:drop-shadow(0px 4px 7px #000000A0);">
			</div>
		</footer>

	</ParallaxContainer>
</template>
