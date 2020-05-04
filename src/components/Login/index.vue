<template>
    <div class="login-page">
        <header>
            <van-nav-bar
                    title="Sign in"
                    fixed
                    placeholder
            ></van-nav-bar>
        </header>
        <section class="login-page-body">
            <van-form ref="login_form">
                <van-field
                        readonly
                        clickable
                        name="picker"
                        :value="countryCode"
                        label="Country"
                        placeholder="Please select country code"
                        right-icon="arrow"
                        @click="showPicker = true"
                />
                <van-popup v-model="showPicker" position="bottom">
                    <van-picker
                            show-toolbar
                            :columns="columns"
                            @confirm="onConfirm"
                            @cancel="showPicker = false"
                    />
                </van-popup>
                <van-field
                        v-model="telephone"
                        name="telephone"
                        label="telephone"
                        placeholder="Please enter telephone"
                />
                <van-field
                        v-model="code"
                        center
                        clearable
                        label="Code"
                        placeholder="Please enter code"
                >
                    <template #button>
                        <van-button size="small" type="primary" class="vip-btn"
                                    :disabled="isGetting"
                                    @click="getCode">{{isGetting?$t('btn.smsCountDown',[count]):'Get Code'}}</van-button>
                    </template>
                </van-field>
                <div class="vip-btn-wrap">
                    <van-button type="primary" class="vip-btn"
                                :disabled="isSubmitting"
                                :loading="isSubmitting"
                                loading-text="Submitting..."
                                @click="submit"
                                block>Sign in</van-button>
                </div>
            </van-form>
        </section>

    </div>
</template>
<script>
    export default {
        data(){
            return {
                countryCode: 'India 0091',
                columns: ['India 0091', 'India 0091', 'India 0091', 'India 0091', 'India 0091'],
                showPicker: false,

                telephone: '',
                code: '',
                isGetting: false,
                gettingText: '',
                count: 10,
                isSubmitting: false,
            }
        },
        methods: {
            onConfirm(value) {
                this.value = value;
                this.showPicker = false;
            },
            getCode(){
                if(!this.telephone){
                    this.$toast('Please enter telephone');
                    return false;
                }
                this.isGetting = true;

                const countDownFn = ()=>{
                    this.count--;
                    if(this.count>0){
                        setTimeout(countDownFn,1000);
                    }else{
                        this.isGetting = false;
                    }
                }
                countDownFn();

            },
            submit(){
                this.toHomePage();
            },
            toHomePage(){
                this.$router.push({name:'home'});
            },
        }
    }
</script>
<style>

</style>