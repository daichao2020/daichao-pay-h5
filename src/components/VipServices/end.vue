<template>
	<div class="default-page step-page">
		<header v-if="isShowHeader">
			<van-nav-bar
					title=""
					fixed
					placeholder
			></van-nav-bar>
		</header>
		<section>
			<div class="panel padding">
				<div class="panel-hd">
					<div class="card">
						<div class="card-hd">
							<p>{{ product.title }}</p>
						</div>
						<div class="card-bd">
							<div class="product-info">
								<h1 class="title">₹{{ parseInt(product.price) }}</h1>
								<p class="desc">audit expense</p>
							</div>
						</div>
					</div>
				</div>
				<div class="panel-bd ">
					<p class="vip-doc-block__title text-center">
						We will send your information to a professional organization for review.
						Please bear the expenses incurred
					</p>
				</div>

			</div>
			<div class="vip-btn-wrap">
				<van-button type="primary" class="vip-btn"
							block @click="toHomePage">Choose other loan product</van-button>
			</div>

		</section>
	</div>
</template>
<script>
	import { getMemberCardList } from '@/api/order';
	export default {
		data(){
			return {
				product: {
					price : 0,
				},
			}
		},
		mounted(){
			this.getMemberCardList();
			this.$store.dispatch('user/getInfo');
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

			getMemberCardList(){
				getMemberCardList().then((res)=>{
					const list = res.data || [];
					if(list.length>0){
						this.product = list[0];
					}
				});
			},

			toHomePage(){
				this.$router.push({name:'home'});
			},

		}
	}
</script>
<style lang="scss" scoped>
	.panel{
		.panel-hd{
			.card{
				width: 100%;
				margin-bottom: 30px;
			}
			.product-info {
				margin-bottom: 0;
			}
		}
		.panel-bd{
			.van-radio-group{
				border-radius: 12px;
				overflow: hidden;
			}
		}
	}
</style>