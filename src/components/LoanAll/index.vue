<template>
    <div class="default-page loan-all-page">
        <header>
            <van-nav-bar
                    title="Loan All"
                    fixed
                    placeholder
            ></van-nav-bar>
        </header>
        <section class="page-body">
            <productList></productList>
        </section>
    </div>
</template>
<script>
    import productList from '@/components/Public/productList'
    export default {
        components:{
            productList
        },
        data(){
            return {

            }
        }
    }
</script>


