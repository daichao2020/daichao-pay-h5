<template>
	<div class="home-page page">
		<header>
			<van-nav-bar
					title="Get a membership to get loan"
					fixed
					placeholder
					@click-left="onClickLeft"
			></van-nav-bar>
		</header>
		<section class="home-page-bdoy">
			<productSwiper></productSwiper>
		</section>
	</div>
</template>
<script>

	import productSwiper from '@/components/Home/swiper'
	export default {
		components:{
			productSwiper
		},
		data(){
			return {
			}
		},
		mounted(){

		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			}
		}
	}
</script>
<style lang="scss">

</style>