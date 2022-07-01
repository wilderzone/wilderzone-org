<script>
export default {
	props: {
		height: {
			type: String,
			required: true
		},
		color: {
			type: String,
			required: false
		}
	},
	computed: {
	},
	data() {
		return {
			component_root_id: this.m_generate_id(),
			parent_parallax_container: ''
		}
	},
	methods: {
		m_generate_id() {
			let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
			let new_id = '';
			for(let i = 0;i < 7;i++){
				new_id += chars[Math.floor(Math.random() * (chars.length - 1))];
			}
			return new_id;
		},
		m_get_parent_container() {
			this.parent_parallax_container = document.getElementById(this.component_root_id).parentElement.parentElement;
		}
	}
}
</script>

<template>
	<div :id="component_root_id" class="parallax_group" :style="{height: $props.height, minHeight: $props.height, backgroundColor: $props.color}">
		<div class="inner">
			<slot></slot>
		</div>
	</div>
</template>

<style scoped>
.parallax_group {
	position: relative;
	z-index: 1;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	width: 100%;
	overflow: hidden;
	scroll-snap-align: start;
}
.parallax_group > .inner {
	position: relative;
	display: flex;
	flex-flow: inherit;
	justify-content: inherit;
	align-items: inherit;
	width: 100%;
	height: 100%;
}
</style>
