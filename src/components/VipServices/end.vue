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
								<p class="desc">{{ product.description }}</p>
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
	import { getPaymentChannelList, submitOrders } from '@/api/order'
	import { Toast } from 'vant';
	export default {
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
			product () {
				return this.$store.getters.product || {}
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			},

			toHomePage(){
				this.$router.push({name:'loanall'});
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