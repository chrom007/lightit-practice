<template>
	<div class="map box">
		<GmapMap
			:center="location"
			:zoom="zoom"
			map-type-id="terrain"
			style="width: 100%; height: 100%">
			<GmapMarker
				:position="location"
				:clickable="true"
				:draggable="false"/>
		</GmapMap>
	</div>
</template>

<script>
import Bus from "../bus.js";

export default {
	data() {
		return {
			location: {
				lat: 40.71,
				lng: -74.21
			},
			zoom: 9
		}
	},
	created() {
		Bus.$on("weather", (weather) => {
			this.location = weather.position;
			this.zoom = 9;
		});
	}
}
</script>

<style lang="scss">
.map {
	flex: 0 40%;
	height: 400px;
}
</style>
