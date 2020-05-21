<template>
    <div class="login-page default-page">
        <header v-if="isShowHeader">
            <van-nav-bar
                    title=""
                    fixed
                    placeholder
            ></van-nav-bar>
        </header>
        <section class="login-page-body">
			<h2 class="vip-doc-block__title">Enter verification code</h2>
			<h2 class="vip-doc-block__desc">Verification code has been send to {{ telephone }}</h2>
            <div ref="code_form">
				<van-password-input
						:length="CODE_LENGTH"
						:value="code"
						:mask="false"
						:focused="showKeyboard"
						@focus="showKeyboard = true"
				/>

				<div class="text-center sms-count-down">
					<template v-if="isGetting">
						{{$t('btn.smsCountDown',[count])}}
					</template>
					<template v-else>
						<van-button size="small" type="default" class="vip-btn"
									@click="getCode">Get Code</van-button>
					</template>
				</div>

				<!-- 数字键盘 -->
				<van-number-keyboard

						:show="showKeyboard"
						@input="onInput"
						@delete="onDelete"
						@blur="showKeyboard = false"
				/>

			</div>
        </section>

    </div>
</template>
<script>
	import { getCountryCodes,getVerificationCodes } from '@/api/user'
	import defaultSettings from '@/settings'
    export default {

        data(){
            return {
                showPicker: false,

				telephone: this.$route.params.telephone,
				countryCode: this.$route.params.countryCode,
                code: '',
                codekey: '',
                isGetting: false,
                gettingText: '',
                count: 60,
                COUNT_DEFAULT: 60,
                CODE_LENGTH: 4,
				showKeyboard: true,
                isSubmitting: false,
            }
        },
		created(){
			this.getCode();
		},
		computed: {
			isShowHeader() {
				const route = this.$route
				const { meta } = route
				return meta.showHeader
			},
		},
        methods: {
            getCode(){
                if(!this.telephone){
                    this.$toast('Please enter telephone');
                    return false;
                }
                if(this.isGetting){
                	return false;
				}
                this.isGetting = true;

                const countDownFn = ()=>{
                    this.count--;
                    if(this.count>0){
                        setTimeout(countDownFn,1000);
                    }else{
                        this.isGetting = false;
						this.count = this.COUNT_DEFAULT;
                    }
                }
                countDownFn();

				this.code = '';
				this.codekey = '';
				getVerificationCodes({
					intl_code: this.countryCode,
					phone_number: this.telephone
				}).then((res)=>{
					this.codekey = res.data.key;
					//this.isGetting = false;
					//this.count = this.COUNT_DEFAULT;
				}).catch((e)=>{
					this.isGetting = false;
					this.count = this.COUNT_DEFAULT;
				})

            },
			onInput(key) {
				this.code = (this.code + key).slice(0, this.CODE_LENGTH);
				if (this.code.length === this.CODE_LENGTH) {
					this.onSubmit();
				}
			},
			onDelete() {
				this.code = this.code.slice(0, this.code.length - 1);
			},
            onSubmit(){
				if(!this.code){
					this.$toast('Please enter code');
					return false;
				}

				const toast = this.$toast.loading({
					duration: 10000,
					message: 'Loading...',
					forbidClick: true,
				});
				this.isSubmitting = true;
				this.$store.dispatch('user/login', {
					verification_key: this.codekey,
					verification_code: this.code,

					device_number: this.$store.getters.deviceNumber,
					platform: this.$store.getters.platform,
					app_version_id: this.$store.getters.appVersionId,
				})
					.then(() => {
						toast.clear();
						this.isSubmitting = false;
						this.toInfoPage();
						//this.toHomePage();
					})
					.catch(() => {
						toast.clear();
						this.isSubmitting = false
					})

            },
            toHomePage(){
                this.$router.push({name:'home'});
            },
            toInfoPage(){
                this.$router.push({name:'info'});
            },
        }
    }
</script>
<style>
.sms-count-down{
	margin-top: 30px;
	font-size: 12PX;
}
</style>