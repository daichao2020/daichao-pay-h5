<template>
    <div class="detail-page page">
        <header>
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
						<img :src="'../imgs/product/'+detail.img">
					</div>
					<div class="item-bd flex-1">
						<p class="title">{{ detail.name }}</p>
						<p class="desc">{{ detail.desc }}</p>
					</div>
				</div>
				<div class="product-detail-card">
					<div class="flex bottom-line">
						<div class="card-item flex-1">
							<van-icon name="balance-o" />
							<p class="title">{{ detail.minAmount + ' - ' + detail.maxAmount }}</p>
							<p class="desc">Amount</p>
						</div>
						<div class="card-item flex-1">
							<van-icon name="underway-o" />
							<p class="title">{{ detail.tenure }}</p>
							<p class="desc">Tenure(Months)</p>
						</div>
					</div>
					<div class="flex">
						<div class="card-item flex-1">
							<van-icon name="discount" />
							<p class="title">{{ detail.interest }}</p>
							<p class="desc">Interest Rate(Per Daily)</p>
						</div>
						<div class="card-item flex-1">
							<van-icon name="bill-o" />
							<p class="title">{{ detail.fee }}</p>
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
					<div class="term-item flex"
						 :class="(index+1) === detail.eligibility.length?'':'bottom-line'"
						 v-for="(item,index) in detail.eligibility" :key="item">
						<div>
							<label class="term-label"><span v-show="index===0">Eligibility:</span></label>
						</div>
						<div class="flex-1">
							<p>{{ (index+1) +'. '+ item }}</p>
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
	import data from '@/data/index.js'
    export default {
        data(){
            return {
				detail: null,
            	id: this.$route.params.id || 0,
            }
        },
		created(){
        	let id = this.id;
        	this.detail = data.list.filter((item)=>{
        		return item.id == id;
			})[0];
		},
        methods: {
            onClickLeft() {
                this.$router.go(-1);
            },
			toGooglePay(){
            	location.href = this.detail.downloadUrl
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