<template>
    <section>
		<van-skeleton title :loading="skeletonLoading" :row="3" />

		<van-pull-refresh v-model="isPullRefresh" @refresh="onRefresh">
			<van-list class="product-list"
					  v-model="loading"
					  :finished="finished"
					  finished-text="No more."
					  @load="getProducts"
			>
				<div class="product-item flex" @click="apply(item.id)" v-for="item in list" :key="item.id">
					<div class="item-hd">
						<img :src="item.product_picture_url_qiniu">
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
			</van-list>
		</van-pull-refresh>

    </section>
</template>
<script>
	import { getProducts } from '@/api/product'

    export default {
        data(){
            return {
				isPullRefresh: false,
            	list: [],
				skeletonLoading: true,
				loading: false,
				finished: false,
				page: 1,
            }
        },
		created(){
        	//this.getProducts();
		},
        methods: {
			onRefresh(){
				this.page = 1;
				this.getProducts().then(()=>{
					this.isPullRefresh = false
				})

			},
			getProducts(){
				return getProducts(this.page).then(res=>{

					let list = res.data || defaultData.list;
					/*list = list.filter(item=>{
						return item.can_see==1;
					});*/

					this.page++;

					let pagination = res.meta.pagination;

					this.list = list;
					// 加载状态结束
					this.loading = false;
					this.skeletonLoading = false;
					// 数据全部加载完成
					if (this.list.length >= pagination.total) {
						this.finished = true;
					}

				});
			},

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