<script>
import SimpleButton from './SimpleButton.vue'
export default {
	name: 'PlayerSearchBox',
	props: {
	},
	emits: ['search'],
	components: {
		SimpleButton
	},
	computed: {
	},
	data() {
		return {
			search_value: ''
		}
	},
	methods: {
		m_emit_search() {
			this.$emit('search');
		}
	},
	mounted() {
	}
}
</script>

<template>
	<div class="player_search_box" :data="search_value">
		<div class="inner">
			<h2 style="color:white;">SEARCH</h2>
			<p style="color:white;">ENTER THE IN-GAME NAME OF THE PLAYER YOU WANT TO FIND STATS FOR:</p>
			<form>
				<label for="player_name">Player Name:</label>
				<input type="text" name="player_name" placeholder="" required @change="search_value = $event.target.value">
				<SimpleButton to="#player" text="GO&nbsp;&nbsp;&nbsp;>" color="#133059" @click="m_emit_search()" />
			</form>
		</div>
	</div>
</template>

<style scoped>
.player_search_box {
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	width: clamp(250px, 90%, 600px);
	background-color: #D94000;
	border-radius: 7px;
	box-shadow: 0px 3px 10px -6px black,
				0px 3px 30px -20px black;
}
.player_search_box .inner {
	padding: 0.3rem 1.2rem;
	border-radius: 0.5rem;
	transition: 0.2s ease all;
	overflow: hidden;
}
.player_search_box form {
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;
	margin: 1rem 0rem;
}
</style>
