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
								<p class="desc">Thank you for your application and we will call you.</p>
							</div>
						</div>
					</div>
				</div>
				<div class="panel-bd ">
					<p class="vip-doc-block__title text-center">
						Thank you you.
					</p>
				</div>

			</div>

		</section>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				product: {
					price : 0,
				},
			}
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