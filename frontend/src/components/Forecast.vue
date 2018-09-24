<template>
	<div class="forecast">
		<div v-for="(item, index) in items" v-show="selected == index" :key="index" class="item">
			<img :src="item.icon" class="icon">
			<div class="city"><span>{{ city }}</span></div>
			<div class="status">{{ item.status }}</div>
			<div class="temp">
				<img src="/assets/temp.png"><span>Temp: <b>{{ item.temp }} °C</b></span>
			</div>
			<div class="wind">
				<span>Wind: <b>{{ item.wind }} m/s</b></span><img src="/assets/wind.png">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["items", "selected", "city"],
}
</script>

<style lang="scss">
.forecast {
	.item {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;

		.icon {
			padding: 15px;
			border: 1px solid rgba(0,0,0,0.075);
			border-radius: 100%;
			width: 128px;
			height: 128px;
			margin-bottom: 5px;
			margin-top: 10px;
			background-color: #fbfbfb;
		}
		.city {
			text-transform: capitalize;
			text-align: center;
			font-size: 40px;
			font-weight: 400;
			flex: 0 100%;
			width: 100%;
			margin-bottom: 5px;

			span {
				display: inline-block;
				margin: 0px auto;
				padding: 0px 10px;
				padding-bottom: 0px;
				border-bottom: 1px solid rgba(0,0,0,0.2);
			}
		}
		.status {
			font-size: 15px;
			font-weight: 300;
			margin-bottom: 30px;
			flex: 0 100%;
			width: 100%;
			text-align: center;
		}
		.temp, .wind {
			flex: 0 50%;
			width: 50%;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			font-size: 24px;

			img {
				width: 40px;
				height: 40px;
				margin: 0px 10px;
			}

			b {
				font-weight: 500;
			}
		}
		.wind {
			justify-content: flex-end;
		}
	}
}

@media screen and (max-width: 1000px) {
	.forecast {
		.item {
			.temp, .wind {
				font-size: 16px;
				b {display: block;}
			}
		}
	}
}
</style>
