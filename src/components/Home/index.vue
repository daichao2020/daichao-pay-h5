<template>
	<div class="default-page home-page">
		<header v-if="isShowHeader">
			<van-nav-bar
					title="Cash Wallet"
					fixed
					placeholder
			></van-nav-bar>
		</header>
		<van-notice-bar mode="link" @click="toPolicyPage">
			Privacy policy
		</van-notice-bar>
		<section class="home-page-body page-body">
			<productSwiper></productSwiper>

			<div class="panel">
				<div class="panel-hd">
					<div class="heading-item flex">
						<van-icon class="icon" name="fire" />
						<div class="heading-item-bd flex-1">
							<p class="title">Personnal Loan</p>
							<p class="desc">Unsecred Loan for persional purpose</p>
						</div>
					</div>
				</div>
				<div class="panel-bd">
					<productList></productList>
				</div>
			</div>

		</section>
	</div>
</template>
<script>

	import productSwiper from '@/components/Public/swiper1'
	import productList from '@/components/Public/productList'

	export default {
		components:{
			productSwiper,
			productList
		},
		data(){
			return {

			}
		},
		mounted(){

		},
		computed: {
			isShowHeader() {
				const route = this.$route
				const { meta } = route
				return meta.showHeader
			},
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			},
			toPolicyPage(){//
				this.$router.push({name:'policy'});
			}
		}
	}
</script>
<style lang="scss">

</style>