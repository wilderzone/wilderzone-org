<script>
export default {
	name: 'ParallaxLayer',
	props: {
		height: {
			type: String,
			required: true
		},
		z_index: {
			type: Number,
			required: false
		},
		start: {
			type: String,
			required: true
		},
		scroll_speed: {
			type: Number,
			required: true
		}
	},
	computed: {
	},
	data() {
		return {
			component_root_id: this.m_generate_id(),
			parent_parallax_container: '',
			parent_parallax_group: '',
			parallax_pos: {x: 0, y: 0}
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
			this.parent_parallax_container = document.getElementById(this.component_root_id).parentElement.parentElement.parentElement.parentElement;
		},
		m_get_parent_group() {
			this.parent_parallax_group = document.getElementById(this.component_root_id).parentElement.parentElement;
		},
		m_scroll() {
			let scroll_pos = {
				// x: this.parent_parallax_container.scrollLeft,
				y: this.parent_parallax_container.scrollTop - this.parent_parallax_group.offsetTop
			}

			this.parallax_pos.y = scroll_pos.y * ((100 - this.scroll_speed) / 100);

			window.requestAnimationFrame(this.m_scroll);
		}
	},
	mounted() {
		this.m_get_parent_container();
		this.m_get_parent_group();
		window.requestAnimationFrame(this.m_scroll);
	}
}
</script>

<template>
	<div :id="component_root_id" class="parallax_layer" :style="{zIndex: $props.z_index, height: $props.height, minHeight: $props.height, top: `calc(${$props.start} + ${parallax_pos.y}px`}">
		<div class="inner">
			<slot></slot>
		</div>
	</div>
</template>

<style scoped>
.parallax_layer {
	position: absolute;
	top: 0px;
	left: 0px;
	z-index: 1;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	width: 100%;
}
.parallax_layer > .inner {
	position: relative;
	display: flex;
	flex-flow: inherit;
	justify-content: inherit;
	align-items: inherit;
	width: 100%;
	height: 100%;
}
</style>
