<script>
export default {
	name: 'SimpleButton',
	props: {
		to: {
			type: String,
			required: true
		},
		text: {
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
	methods: {
	},
	mounted() {
	}
}
</script>

<template>
	<RouterLink :to="$props.to">
		<div class="simple_button">
			<div class="inner" :style="{backgroundColor: $props.color}">
				<p>{{ $props.text }}</p>
			</div>
		</div>
	</RouterLink>
</template>

<style scoped>
.simple_button {
	width: fit-content;
}
.simple_button .inner {
	padding: 0.3rem 1.2rem;
	border-radius: 0.5rem;
	box-shadow: 0px 3px 10px -7px black;
	transition: 0.2s ease all;
	overflow: hidden;
	user-select: none;
	pointer-events: none;
}
.simple_button p {
	margin: 0px;
	color: white;
	font-family: 'Fredoka', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-size: 1.0rem;
	text-shadow: none;
	user-select: none;
	pointer-events: none;
}

@media (hover: hover) {
	.simple_button:hover .inner {
		transform: translateY(-2px);
		filter: brightness(1.15)
	}
}
</style>
