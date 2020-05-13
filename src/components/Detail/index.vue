<template>
    <div class="default-page detail-page page">
        <header v-if="isShowHeader">
            <van-nav-bar
                    title="Person loan offers"
                    fixed
                    left-arrow
                    @click-left="onClickLeft"
                    placeholder
            ></van-nav-bar>
        </header>
        <section class="page-body">
			<div class="detail-card-box">
				<div class="product-preview-item flex">
					<div class="item-hd">
						<img :src="'/imgs/product/'+detail.id+'.png'">
					</div>
					<div class="item-bd flex-1">
						<p class="title">{{ detail.product_name }}</p>
						<p class="desc">{{ detail.product_title }}</p>
					</div>
				</div>
				<div class="product-detail-card">
					<div class="flex bottom-line">
						<div class="card-item flex-1">
							<van-icon name="balance-o" />
							<p class="title">{{ detail.amount_low + ' - ' + detail.amount_high }}</p>
							<p class="desc">Amount</p>
						</div>
						<div class="card-item flex-1">
							<van-icon name="underway-o" />
							<p class="title">{{ detail.divide_period_min + '-' + detail.divide_period_max }}</p>
							<p class="desc">Tenure(Months)</p>
						</div>
					</div>
					<div class="flex">
						<div class="card-item flex-1">
							<van-icon name="discount" />
							<p class="title">{{ detail.daily_rate }}</p>
							<p class="desc">Interest Rate(Per Daily)</p>
						</div>
						<div class="card-item flex-1">
							<van-icon name="bill-o" />
							<p class="title">{{ detail.pro_fee || 0 }}</p>
							<p class="desc">Processing Fee</p>
						</div>
					</div>
				</div>
			</div>

			<div class="panel">
				<div class="panel-hd">
					<div class="heading-item">
						<p class="title">Load Terms</p>
					</div>
				</div>
				<div class="panel-bd term-card">
					<div class="term-item flex">
						<div>
							<label class="term-label"><span>Eligibility Criteria:</span></label>
						</div>
						<div class="flex-1">
							<p>{{ detail.apply_condition }}</p>
						</div>
					</div>
					<div class="term-item flex">
						<div>
							<label class="term-label"><span>Apply Requirements:</span></label>
						</div>
						<div class="flex-1">
							<p>{{ detail.apply_doc }}</p>
						</div>
					</div>
				</div>

			</div>

			<div class="panel">
				<div class="panel-hd">
					<div class="heading-item">
						<p class="title">How to Apply</p>
					</div>
				</div>
				<div class="panel-bd apply-process-card">
					<div class="apply-process-item">
						<img src="@/assets/imgs/detail/icon_apply_process_y.png"/>
					</div>
				</div>
			</div>
        </section>
		<footer class="page-footer">
			<van-button type="primary" class="vip-btn" @click="toGooglePay"
						block >Apply Nor</van-button>
		</footer>
    </div>
</template>
<script>
	import defaultData from '@/data/index'
	import { getProductId,setProductId } from '@/utils/order'

    export default {
		name: 'detail',
        data(){
            return {
				detail: {},
            	id: this.$route.params.id,
            }
        },
		created(){

        	if(this.id){
				setProductId(this.id);
			}else {
        		this.id = getProductId();
			}

			this.getProductDetailById();
		},
		computed: {
			isShowHeader() {
				const route = this.$route
				const { meta } = route
				return meta.showHeader
			},
		},
        methods: {
			getProductDetailById(){
				let id = this.id;
				let arr = defaultData.data.filter(item => {
					return id === item.id;
				});
				this.detail = arr[0];
			},
            onClickLeft() {
                this.$router.go(-1);
            },
			toGooglePay(){
				let jump_url = this.detail.jump_url;

				try {
					let t = new Date().getTime();
					jsApi.requireAsync('openbrowser', t, JSON.stringify({
						"reqId": t,
						"openUrl": jump_url
					}));

				}catch (e) {
					location.href = jump_url
				}

			}
        }
    }
</script>
<style lang="scss" scoped>

	.page{
		overflow: hidden;
	}
	.page-body{
		height: 100%;
		overflow-y: auto;
	}
	.page-footer{
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 8PX;
	}

	.detail-card-box{
		margin-bottom: 60px;
	}
	.panel{
		margin: 0 auto 60px auto;
	}

</style>