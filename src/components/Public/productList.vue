<template>
    <section>
        <div class="product-list">
            <div class="product-item flex" @click="apply(item.id)" v-for="item in list" :key="item.id">
                <div class="item-hd">
                    <img :src="'../imgs/product/'+item.img">
                </div>
                <div class="item-bd flex-1">
                    <p class="title">{{ item.name }}</p>
                    <p class="desc">Max Amount: {{ item.maxAmount }}</p>
                    <p class="desc">Tenure: {{ item.tenure }} Months</p>
                    <p class="desc">Interest: {{ item.interest }} / Daily</p>
                    <p class="desc">Pro.Fee: {{ item.fee }}</p>
                </div>
                <div class="item-ft">
                    <van-button size="small" type="primary" class="vip-btn">Apply</van-button>
                </div>
            </div>
        </div>
        <van-empty class="product-list-empty" v-if="false"
                   image="imgs/custom-empty-image.png"
                   description="No list">
            <van-button round block type="danger" class="bottom-button">
                refresh
            </van-button>
        </van-empty>
    </section>
</template>
<script>
	import data from '@/data/index.js'
    export default {
        data(){
            return {
            	list: data.list
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