<template>
	<div class="days" v-if="items.length">
		<div class="item" v-for="(item, index) in items" :key="index" :class="[selected == index ? 'selected' : '']" @click="$emit('day', index)">
			{{ getDate(item) }}
		</div>
	</div>
</template>

<script>
export default {
	name: "Days",
	props: ["items", "selected"],
	methods: {
		getZero(number) {
			return number < 10 ? '0' + number : String(number); 
		},
		getDate(item) {
			var date = new Date(item * 1000);
			var day = this.getZero(date.getDate());
			var month = this.getZero(date.getMonth());

			return `${day}.${month}`;
		}
	}
}
</script>

<style lang="scss">
.days {
	margin: -10px;
	margin-bottom: 10px;
	padding: 10px;
	background-color: #2980b9;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.item {
		padding: 5px 12px;
		color: white;
		background-color: #3498db;
		border-radius: 4px;
		cursor: pointer;

		&.selected {
			background-color: white;
			color: #222;
		}
	}
}

@media screen and (max-width: 1000px) {
	.days {
		justify-content: center;
		padding: 5px;
		display: flex;
		flex-wrap: wrap;

		.item {
			margin: 5px;
		}
	}
}
</style>
