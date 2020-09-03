<template>
    <swiper class="home-swiper" ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
            <a class="slide-product" href="javascript:;" @click="toDetail"><img src="@/assets/imgs/swiper.jpg"/></a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script>
	import { recordOP } from '@/api/user'
    export default {
        name: 'carrousel',
        data() {
            return {
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    // Some Swiper option/callback...
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.$swiper
            }
        },
        mounted() {
        },
		methods: {
        	toDetail(){

        		return false;
				let phoneNumber = this.$store.getters.phoneNumber;
				if(phoneNumber){
					recordOP({
						operation_type: '4',//1-产品申请, 2-产品点击, 4-banner广告点击（轮播图）
						product_id: '',//产品ID
						extra_id: '',//操作类型对应的对象id(如操作是点击产品，此处对应的是产品id，操作的是点击信用卡，此处对应的是信用卡id)
						phone_number: phoneNumber
					});
				}

			}
		}
    }
</script>


