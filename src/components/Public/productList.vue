<template>
    <section>
		<div class="product-list">
			<div class="product-item flex" @click="apply(item.id)" v-for="item in list" :key="item.id">
				<div class="item-hd">
					<img :src="'/imgs/product/'+item.id+'.png'">
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
		</div>
    </section>
</template>
<script>
	import defaultData from '@/data/index'

    export default {
        data(){
            return {
            	list: defaultData.data,
            }
        },

        methods: {
            apply(id){
                this.toDetailPage(id);
            },
            toDetailPage(id){
                this.$router.push({name:'detail', params: { id: id }});
            }
        }
    }
</script>
<style lang="scss">

</style>