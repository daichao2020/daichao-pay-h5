<template>
	<div class="product-item flex" @click="apply(item.id)">
		<div class="item-hd">
			<!--<img :src="item.product_picture_url_qiniu">-->
			<van-image :src="item.product_picture_url_qiniu" width="2.2rem" height="2.2rem" lazy-load>
				<template v-slot:loading>
					<van-loading type="spinner" size="20" />
				</template>
				<template v-slot:error><van-icon name="photo-o" /></template>
			</van-image>
		</div>
		<div class="item-bd flex-1">
			<p class="title">{{ item.product_name }}</p>
			<p class="desc">Max Amount: {{ item.amount_high }}</p>
			<p class="desc">Tenure: {{ item.divide_period_min + '-' + item.divide_period_max }} Months</p>
			<p class="desc">Interest: {{ item.daily_rate }} / Daily</p>
			<p class="desc">Pro.Fee: {{ item.pro_fee || 0 }}</p>
		</div>
		<div class="item-ft">
			<van-button size="small" type="primary" class="vip-btn">Apply</van-button>
		</div>
	</div>
</template>
<script>
	import { recordOP } from '@/api/user'
	export default {
		props:{
			item: {
				type: Object,
				default: function () {
					return {}
				}
			}
		},
		data(){
			return {

			}
		},
		methods:{
			apply(id){

				recordOP({
					operation_type: '2',//1-产品申请, 2-产品点击, 4-banner广告点击（轮播图）
					product_id: id,//产品ID
					extra_id: id,//操作类型对应的对象id(如操作是点击产品，此处对应的是产品id，操作的是点击信用卡，此处对应的是信用卡id)
				});

				this.toDetailPage(id);
			},
			toDetailPage(id){
				this.$router.push({name:'detail', params: { id: id }});
			}
		}
	}
</script>