<template>
	<div class="default-page home-page">
		<header v-if="isShowHeader">
			<van-nav-bar
					title="Cash Wallet"
					fixed
					placeholder
			></van-nav-bar>
		</header>
		<van-pull-refresh v-model="isPullRefresh" @refresh="onRefresh">
			<section class="home-page-body page-body">
				<productSwiper :list="carouselList" v-if="carouselList.length>0"></productSwiper>

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
						<van-skeleton title :loading="skeletonLoading" :row="3" />
						<div class="product-list">
							<productItem v-for="item in list" :key="item.id" :item="item"></productItem>
						</div>
					</div>
				</div>

			</section>
		</van-pull-refresh>
	</div>
</template>
<script>

	import productSwiper from '@/components/Public/swiper1'
	import { getHomeProducts } from '@/api/product'
	import { recordOP } from '@/api/user'
	import productItem from '@/components/Public/productItem.vue'

	export default {
		components:{
			productSwiper,
			productItem
		},
		data(){
			return {
				list: [],
				carouselList: [],
				isPullRefresh: false,
				skeletonLoading: true,
			}
		},
		created(){
			this.getHomeProducts();
		},
		computed: {
			isShowHeader() {
				const route = this.$route
				const { meta } = route
				return meta.showHeader
			},
		},
		methods: {
			onRefresh(){
				this.getHomeProducts().then(()=>{
					this.isPullRefresh = false
				})

			},
			getHomeProducts(){
				return getHomeProducts().then(res=>{
					this.skeletonLoading = false;
					const { data } = res;
					this.list = data.special || [];
					this.carouselList = data.carousel || [];

				})
			},
		}
	}
</script>
<style lang="scss">

</style>