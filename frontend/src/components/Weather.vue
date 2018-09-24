<template>
	<div class="weather box">
		<Days :items="days" :selected="selected_day" v-on:day="selectDay" />
		<Forecast :items="forecast" :selected="selected_day" :city="city"/>
		<Message :mode="mode" />
	</div>
</template>

<script>
import Bus from "../bus.js";
import Days from "./Days.vue";
import Forecast from "./Forecast.vue";
import Message from "./Message.vue";

export default {
	components: {
		Days, 
		Forecast,
		Message
	},
	data() {
		return {
			days: [],
			forecast: [],
			selected_day: -1,
			city: null,
			mode: 0
		}
	},
	methods: {
		selectDay(day) {
			this.selected_day = day;
			this.mode = 2;
		}
	},
	created() {
		Bus.$on("weather", (weather) => {
			this.days = [];
			this.forecast = weather.forecast;
			this.city = weather.city;
			this.mode = 1;

			for(var day of this.forecast) {
				this.days.push(day.date_unix);
			}
		})
	}
}
</script>

<style lang="scss">
.weather {
	flex: 0 calc(60% - 15px);
	height: 400px;
}

@media screen and (max-width: 1000px) {
	.weather {
		height: initial;
		padding-bottom: 25px;
	}
}
</style>
