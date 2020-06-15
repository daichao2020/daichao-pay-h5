<template>
    <swiper class="home-swiper" ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
            <a class="slide-product" href="/" target="_blank"><img src="@/assets/imgs/sw2.png"/></a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script>
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
            console.log('Current Swiper instance object', this.swiper)
            this.swiper.slideTo(3, 1000, false)
        }
    }
</script>


