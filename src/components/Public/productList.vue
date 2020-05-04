<template>
    <section>
        <div class="product-list">
            <div class="product-item flex" @click="apply" v-for="item in 3" :key="item">
                <div class="item-hd">
                    <img src="@/assets/imgs/icons/googlepay.png">
                </div>
                <div class="item-bd flex-1">
                    <p class="title">CashMama</p>
                    <p class="desc">Max Amount:8000</p>
                    <p class="desc">Tenure:3-4 Months</p>
                    <p class="desc">Interest:0.010 / Daily</p>
                    <p class="desc">Pro.Fee:0</p>
                </div>
                <div class="item-ft">
                    <van-button size="small" type="primary" class="vip-btn">Apply</van-button>
                </div>
            </div>
        </div>
        <van-empty class="product-list-empty"
                   image="imgs/custom-empty-image.png"
                   description="No list">
            <van-button round block type="danger" class="bottom-button">
                refresh
            </van-button>
        </van-empty>
    </section>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        methods: {
            apply(){
                this.toDetailPage();
            },
            toDetailPage(){
                this.$router.push({name:'detail'});
            }
        }
    }
</script>
<style lang="scss">

</style>