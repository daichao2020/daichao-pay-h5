<template>
    <div class="default-page detail-page page">
        <header v-if="isShowHeader">
            <van-nav-bar
                    fixed
                    left-arrow
					title="详情"
                    @click-left="onClickLeft"
                    placeholder
            ></van-nav-bar>
        </header>
		<van-skeleton title avatar :loading="skeletonLoading" :row="3" />
        <section class="page-body" v-show="!skeletonLoading">
			<div class="detail-card-box">
				<div class="product-preview-item flex">
					<div class="item-hd">
						<van-image :src="detail.product_picture_url_qiniu" width="2.2rem" height="2.2rem" lazy-load>
							<template v-slot:loading>
								<van-loading type="spinner" size="20" />
							</template>
							<template v-slot:error><van-icon name="photo-o" /></template>
						</van-image>
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
							<p class="desc">{{$t('str.amount')}}</p>
						</div>
						<div class="card-item flex-1">
							<van-icon name="underway-o" />
							<p class="title">{{ detail.divide_period_min + '-' + detail.divide_period_max }}</p>
							<p class="desc">{{$t('str.tenure')}}</p>
						</div>
					</div>
					<div class="flex">
						<div class="card-item flex-1">
							<van-icon name="discount" />
							<p class="title">{{ detail.daily_rate }}</p>
							<p class="desc">{{$t('str.interestRate')}}</p>
						</div>
						<div class="card-item flex-1">
							<van-icon name="bill-o" />
							<p class="title">{{ detail.pro_fee || 0 }}</p>
							<p class="desc">{{$t('str.processingFee')}}</p>
						</div>
					</div>
				</div>
			</div>

			<div class="panel">
				<div class="panel-hd">
					<div class="heading-item">
						<p class="title">{{$t('str.loadTerms')}}</p>
					</div>
				</div>
				<div class="panel-bd term-card">
					<div class="term-item flex">
						<div>
							<label class="term-label"><span>{{$t('str.eligibilityCriteria')}}:</span></label>
						</div>
						<div class="flex-1">
							<p>{{ detail.apply_condition }}</p>
						</div>
					</div>
					<div class="term-item flex">
						<div>
							<label class="term-label"><span>{{$t('str.applyRequirements')}}:</span></label>
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
						<p class="title">{{$t('str.howToApply')}}</p>
					</div>
				</div>
				<div class="panel-bd apply-process-card">
					<div class="apply-process-item">
						<van-steps :active="active"
								   active-icon="success"
								   inactive-icon="arrow"
								   active-color="#07c160">
							<van-step>点击申请</van-step>
							<van-step>安装贷款应用</van-step>
							<van-step>获取现金</van-step>
						</van-steps>
					</div>
				</div>
			</div>
        </section>
		<footer class="page-footer">
			<van-button type="primary" class="vip-btn" @click="toGooglePay"
						block >{{$t('str.applyNor')}}</van-button>
		</footer>
    </div>
</template>
<script>
	import { getProductDetailById } from '@/api/product'
	import { getProductId,setProductId } from '@/utils/order'
	import { recordOP } from '@/api/user'

    export default {
		name: 'detail',
        data(){
            return {
				skeletonLoading: true,
				detail: {},
            	id: this.$route.params.id,
				active: 2,
            }
        },
		mounted(){

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
				getProductDetailById(this.id).then(res=>{
					this.detail = res.data;
					this.skeletonLoading = false;
				})
			},
            onClickLeft() {
                this.$router.go(-1);
            },
			toGooglePay(){
				recordOP({
					operation_type: '1',//1-产品申请, 2-产品点击, 4-banner广告点击（轮播图）
					product_id: this.detail.id,//产品ID
					extra_id: this.detail.id,//操作类型对应的对象id(如操作是点击产品，此处对应的是产品id，操作的是点击信用卡，此处对应的是信用卡id)
				});

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