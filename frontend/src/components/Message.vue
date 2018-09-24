<template>
	<div class="messages">
		<div class="message" v-show="mode == 0">
			Enter your city...
		</div>

		<div class="message" v-show="mode == 1">
			Select the desired date...
		</div>
	</div>
</template>

<script>
export default {
	props: ["mode"]
}
</script>

<style lang="scss">
.messages {
	width: 100%;
	height: 100%;
	flex: 0 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	.message {
		font-size: 30px;
		text-align: center;
		font-weight: 300;
	}
}

@media screen and (max-width: 1000px) {
	.messages .message {
		font-size: 22px;
		padding: 20px 0px;
	}
}
</style>
