<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
export default {
	computed: {
	},
	data() {
		return {
		}
	},
	methods: {
	},
	mounted() {
		console.log(`
 _      ______ _     ____  _____ ____   ________  _   _ _____ 
| |    | |_   | |   |  _ \\| ____|  _ \\ |__  / _ \\| \\ | | ____|
| | /\\ | | | || |   | | | |  _| | |_) |  / / | | |  \\| |  _|  
 \\ V  V / _| || |___| |_| | |___|  _ <  / /| |_| | |\\  | |___ 
  \\_/\\_/ |____|_____|____/|_____|_| \\_\\/____\\___/|_| \\_|_____|`);
	}
}
</script>

<template>
	<RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka&family=Ovo&family=Patrick+Hand&family=Sriracha&display=swap');
@import '@/assets/css/base.css';
@import '@/assets/css/form.css';
@import '@/assets/css/animations.css';

body {
	background-image: url('@/assets/Background_Textures/Texture_4.jpg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
#app {
	width: 100%;
	max-width: 2360px;
	height: 100%;
	margin: 0px auto;
	font-weight: normal;
	box-shadow: 0px 0px 10px -4px black,
				0px 0px 30px -20px black,
				0px 0px 100px -74px black;
}

a {
	text-decoration: none;
}

h1 {
	color: inherit;
	font-family: 'Ovo', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	/* font-family: 'Sriracha', cursive; */
	font-size: 3.0rem;
	font-weight: normal;
	/* text-shadow: 0px 2px 1px #000000A0; */
}
h2 {
	color: inherit;
	font-family: 'Ovo', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-size: 2.0rem;
	font-weight: normal;
	/* text-shadow: 0px 2px 1px #000000A0; */
}
p {
	color: inherit;
	font-family: 'Fredoka', cursive;
	font-size: 1.0rem;
	/* text-shadow: 0px 2px 1px #000000A0; */
}

nav {
	width: 100%;
	font-size: 12px;
	text-align: center;
	margin-top: 2rem;
}

nav a.router-link-exact-active {
	color: var(--color-text);
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a {
	display: inline-block;
	padding: 0 1rem;
	border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
	border: 0;
}
</style>
