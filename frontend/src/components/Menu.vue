<template>
	<div class="menu box">
		<a class="logo" href="/">
			Weather
		</a>

		<input type="text" class="city" v-model="city" @keyup="getWeather" placeholder="Enter city name...">
	</div>
</template>

<script>
import Bus from "../bus.js";

export default {
	data() {
		return {
			city: "",
			timer: null,
		}
	},
	methods: {
		getWeather() {
			if (this.city.length >= 3) {
				clearTimeout(this.timer);
				this.timer = setTimeout(() => {
					this.timer = null;
					this.$http.post("weather", {city: this.city}).then(response => {
						Bus.$emit("weather", response.body.weather);
					});
				}, 1250);
			}
			else {
				if (this.timer) clearTimeout(this.timer);
			}
		}
	}
}
</script>

<style lang="scss">
.menu {
	flex: 0 100%;
	width: 100%;
	display: flex;

	.logo {
		font-size: 30px;
		margin-right: 10px;
		flex: 0 auto;
		margin: -10px;
		margin-right: 10px;
		background-color: #2c3e50;
		color: white;
		padding: 10px 25px;
		font-weight: 300;
		text-decoration: none;
	}
	.city {
		flex: 1 auto;
		padding: 5px 15px;
		border: 1px solid rgba(0,0,0,0.1);
		border-radius: 4px;
		background-color: #f5f5f5;
		outline: none;
	}
}
</style>
