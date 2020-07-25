<template>
	<div>
		1111
		<swiper class="product-swiper" ref="productSwiper" :options="swiperOptions">
			<swiper-slide v-for="(item,index) in cardList" :key="item.id">
				<div class="card">
					<div class="card-hd">
						<p class="tips-title">{{$t('str.congratulations')}} </p>
						<p class="tips-desc">{{$t('str.youPassedTheAudit')}} </p>
						<div class="heading">
							<p>{{$t('str.loanAmount')}}</p>
							<h1 class="title">{{$t('str.unit') + item.description }}</h1>
						</div>
					</div>
					<div class="card-bd">
						<div class="product-info">
							<div class="desc small flex">
								<div class="flex-1 text-left">{{$t('str.interest')}}</div>
								<div class="bold">{{$t('str.unit')}}45</div>
							</div>
							<div class="desc small flex">
								<div class="flex-1 text-left">
									{{$t('str.repaymentAmount')}}(<span class="small red">-{{parseInt(item.price)}}</span>)
								</div>
								<div class="bold">{{$t('str.unit')}}{{parseInt(parseInt(item.description)-parseInt(item.price))}}</div>
							</div>
							<div class="desc small top-line flex">
								<div class="flex-1 text-left">{{$t('str.loanTerm')}}</div>
								<div class="bold">60{{$t('str.days')}}</div>
							</div>
						</div>
					</div>
					<div class="card-ft">
						<div class="warn-tips">
							<div class="tips-hd">
								<span class="title">{{$t('str.warning')}}:  </span><van-icon name="warning-o" />
							</div>
							<div class="tips-bd">
								<div class="tip-item bottom-line">
									<p>① {{$t('str.theAuditFee')}} {{$t('str.unit')}}{{parseInt(item.price)}}</p>
								</div>
								<div class="tip-item">
									<p>② {{$t('str.theLimitIs')}}</p>
								</div>
								<div class="tip-item bottom-line">
									<p>③ {{$t('str.theYouNeedToPay1')+$t('str.unit')+parseInt(item.price)+$t('str.theYouNeedToPay2')}}</p>
								</div>
							</div>

						</div>
						<div class="vip-btn-wrap">
							<van-button type="primary" class="vip-btn"
										color="#ff9933"
										:disabled="isSubmitting"
										:loading="isSubmitting"
										:loading-text="$t('str.submitting')"
										block
										@click="selectCurrentItem(item)">{{$t('str.immediateWithdrawal')}}</van-button>
						</div>
						<div class="vip-btn-wrap" style="margin-top: 15px;" v-if="userInfo.is_member">
							<van-button type="default"
										block
										@click="toHomePage()">{{$t('str.chooseOtherLoanProduct')}}</van-button>
						</div>
					</div>
				</div>

			</swiper-slide>

		</swiper>
		<!--<div class="swiper-pagination flex" slot="pagination" id="pagination"></div>-->
	</div>

</template>
<script>
	import { getMemberCardList,submitOrdersAlipay,payOrders } from '@/api/order';
	import { Toast } from 'vant';

	export default {
		name: 'carrousel',
		data() {
			const _self = this;
			return {
				cardList: [],
				sold_count: 0,
				activeItemIndex: 1,
				isSubmitting: false,
				swiperOptions: {
					// 设置slider容器能够同时显示的slides数量，默认为1， 'auto'则自动根据slides的宽度来设定数量
					slidesPerView: 'auto',
					/*
					* 开启这个参数来计算每个slide的progress(进度、进程)
					* 对于slide的progress属性，活动的那个为0，其他的依次减1
					*/
					watchSlidesProgress: true,
					// 默认active slide居左，设置为true后居中
					centeredSlides: true,
					// 当你创建一个Swiper实例时是否立即初始化，这里我们手动初始化
					init: false,
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
						renderBullet: function (index, className) {

							let text = _self.cardList[index].title;
							return '<span class="' + className + '">' + text + '</span>';
						}
					},
					// Some Swiper option/callback...
					on:{
						progress: function(progress) {
							for (let i = 0; i < this.slides.length; i++){
								const slide = this.slides[i];
								const slideProgress = slide.progress;
								const scale = 1 - Math.min(Math.abs(.2 * slideProgress), 1);
								const style = slide.style;
								style.opacity = 1 - Math.min(Math.abs(slideProgress / 2), 1);
								style.webkitTransform = style.MsTransform = style.msTransform = style.MozTransform = style.OTransform = style.transform =
									"translate3d(0px,0," + -Math.abs(150 * slideProgress) + "px)"
								;
							}

						},
						slideChange: function() {
							for (let i = 0; i < this.slides.length; i++){
								const style = this.slides[i].style;
								style.webkitTransitionDuration = style.MsTransitionDuration = style.msTransitionDuration = style.MozTransitionDuration = style.OTransitionDuration = style.transitionDuration = 0 + "ms"
							}
							let activeIndex = this.activeIndex;
							let sold_count = _self.cardList[activeIndex].sold_count;
							_self.startNumAnimation(sold_count);
						},
					},

				}
			}
		},
		computed: {
			swiper() {
				return this.$refs.productSwiper.$swiper
			},
			appVersionId () {
				return this.$store.getters.appVersionId
			},
			userInfo(){
				return this.$store.getters.info
			},
		},
		mounted() {
			if(this.userInfo.is_member){//true
				this.toEndPage();
			}else {
				this.getMemberCardList();
			}
			//this.getMemberCardList();
		},
		methods: {
			getMemberCardList(){
				getMemberCardList().then((res)=>{
					this.cardList = res.data || [];
					this.initSwiper();
				});
			},
			initSwiper() {
				this.$nextTick(async() => {
					await this.swiper.init() // 现在才初始化
					await this.swiper.slideTo(this.activeItemIndex)
				})
			},
			tweenUpdate(){
				requestAnimationFrame(this.tweenUpdate);
				this.$tweener.update();
			},
			startNumAnimation(sold_count) {
				//target,to,during,delay,easing,onUpdate,onComplete
				this.$tween.fade(
					this,//target
					{sold_count:sold_count},//to
					600,//during
					0,//delay
					'',//easing
					()=>{//onUpdate
						this.sold_count = (this.sold_count||0).toFixed();
					}
				);
			},
			selectCurrentItem(productInfo){
				this.$store.dispatch('product/setProductInfo',productInfo);
				this.submitOrder(productInfo);
			},
			submitOrder(productInfo){

				/*if(!this.userInfo.name){
					this.toInfoPage();
					return false;
				}*/

				let return_url = location.href.slice(0,location.href.search('#'))+'#/step03';
				const params = {
					return_url: return_url, //成功后跳转的url
					member_card_id: productInfo.id,//支付产品ID
				};

				if(this.isSubmitting){
					return false;
				}
				this.isSubmitting = true;

				try {
					Adjust.trackEvent(clickPayEvent);
				}catch (e) {

				}

				//打开一个不被拦截的新窗口
				var newTab  = window.open();

				submitOrdersAlipay(params).then((res)=>{

					const { data }  = res;
					this.isSubmitting = false;
					if(data){
						this.$store.dispatch('product/setOrderInfo',data);
						//let routerData = this.$router.resolve({path:'/payGateWay',query:{ htmlData: data.payment_link}})
						// 打开新页面
						//window.open(routerData.href, '_ blank')
						//location.href = routerData.href;
						//this.toStep03Page();

						const div = document.createElement('div');
						div.innerHTML = data.payment_link; // html code
						newTab.document.body.appendChild(div);
						newTab.document.forms.alipay_submit.submit();

						//this.toStep03Page();
					}

				}).catch(()=>{
					this.isSubmitting = false;
				});
			},
			toStep03Page(){
				this.$router.push({name:'step03'});
			},
			toHomePage(){
				this.$router.push({name:'home'});
			},
			toInfoPage(){
				this.$router.push({name:'info'});
			},
			toEndPage(){
				this.$router.replace({name:'end'});
			}
		}
	}
</script>
<style lang="scss" scoped>
	.product-swiper{
		margin-top: 0;
	}
	.card{
		border-radius: 0;
		width: 100%;
		padding: 20px 40px;
		background: linear-gradient(180deg, $primary 0%, $primary 32%, rgba(255, 255, 255, 1) 32% );
		.card-bd{
			padding: 0 30px;
			color: #333;
			box-shadow: 0 8px 16px rgba(48, 141, 66, .5);
		}
	}
	.card-hd{
		.tips-title{
			line-height: 1;
			font-size: 29PX;
			font-weight: 500;
			margin-bottom: 20px;
		}
		.tips-desc{
			line-height: 1;
			font-size: 16PX;
		}
		.heading{
			color: #fff;
			font-size: 20PX;
			line-height: 1;
			margin-top: 38px;
			.title{
				font-size: 32PX;
				line-height: 1;
				margin-top: 30px;
				margin-bottom: 10px;
			}
		}
	}

	.product-info{
		margin-bottom: 0;
		.desc{
			padding: 30px 0 10px 0;
			&:last-child{
				margin-top: 50px;
				margin-bottom: 30px;
			}
		}
	}
	.warn-tips{
		color: #333;
		font-size: 15PX;
		margin: 40px 0 160px 0;

		span{
			vertical-align: middle;
		}
		i{
			vertical-align: middle;
			color: $primary;
			font-size: 23PX;
		}
		.tips-hd{
			position: relative;
			padding: 0 0 0 30px;
			&::before{
				content: ' ';
				display: block;
				position: absolute;
				left: 0;
				height: 100%;
				width: 12px;
				background: $primary;
				border-radius: 8px;
			}
		}
		.title{
			font-weight: 700;
		}
		.tip-item{
			padding: 16px 0 16px 40px;
		}
	}

</style>