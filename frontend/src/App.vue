<template>
	<div id="app">
		<Menu></Menu>
		<Weather></Weather>
		<Map></Map>
		<Footer></Footer>
	</div>
</template>

<script>
import Menu from './components/Menu.vue';
import Weather from './components/Weather.vue';
import Map from './components/Map.vue';
import Footer from './components/Footer.vue';

export default {
	name: 'app',
	components: {
		Menu,
		Weather, 
		Map,
		Footer
	},
};
</script>

<style lang="scss">
html, body {
	background-color: #f5f5f5;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
input, select, textarea {
	font-family: inherit;
	font-size: inherit;
	font-weight: inherit;
	color: inherit;
}
#app {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', Calibri, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	width: 900px;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-wrap: wrap;
}
.box {
	background-color: white;
	padding: 10px;
	border-radius: 3px;
	box-shadow: 0px 6px 15px rgba(0,0,0,0.05);
	overflow: hidden;
	margin-bottom: 15px;
	box-sizing: border-box;
}

@media screen and (max-width: 1000px) {
	html, body {
		display: block;
	}
	#app {
		width: 98%;
		margin: 2vw auto;
		display: block;

		.menu {
			display: block;
			box-sizing: border-box;

			.logo, .city {
				width: 100%;
				display: block;
				box-sizing: border-box;
			}
			.logo {
				width: calc(100% + 20px);
				margin-bottom: 10px;
			}
		}

		.box {
			width: 100%;
		}
	}
}
</style>
