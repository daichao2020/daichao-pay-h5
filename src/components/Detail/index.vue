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
						<img src="@/assets/imgs/icons/googlepay.png">
					</div>
					<div class="item-bd flex-1">
						<p class="title">Loanflix</p>
						<p class="desc">100% Online High Approval Rate</p>
					</div>
				</div>
				<div class="product-detail-card">
					<div class="flex bottom-line">
						<div class="card-item flex-1">
							<van-icon name="balance-o" />
							<p class="title">1000-20000</p>
							<p class="desc">Amount</p>
						</div>
						<div class="card-item flex-1">
							<van-icon name="underway-o" />
							<p class="title">3-12</p>
							<p class="desc">Tenure(Months)</p>
						</div>
					</div>
					<div class="flex">
						<div class="card-item flex-1">
							<van-icon name="discount" />
							<p class="title">0.010%</p>
							<p class="desc">Interest Rate(Per Daily)</p>
						</div>
						<div class="card-item flex-1">
							<van-icon name="bill-o" />
							<p class="title">0</p>
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
					<div class="term-item flex bottom-line">
						<div>
							<label class="term-label">Eligibility Criteria</label>
						</div>
						<div class="flex-1">
							<p>18-45 years old</p>
						</div>
					</div>
					<div class="term-item flex">
						<div>
							<label class="term-label">Apply Requirements</label>
						</div>
						<div class="flex-1">
							<p>Subject to app application</p>
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
			<van-button type="primary" class="vip-btn"
						block >Apply Nor</van-button>
		</footer>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        methods: {
            onClickLeft() {
                this.$router.go(-1);
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