<template>
    <div class="login-page default-page">
        <header v-if="isShowHeader">
            <van-nav-bar
                    :title="$t('str.signIn')"
                    fixed
                    placeholder
            ></van-nav-bar>
        </header>
        <section class="login-page-body">
			<h2 class="vip-doc-block__title">{{$t('str.welcome')}}</h2>
            <div ref="login_form">
                <!--<van-field
                        readonly
                        clickable
                        name="picker"
                        :value="countryCodeText"
                        :label="$t('str.country')"
                        :placeholder="$t('str.countryPlaceholder')"
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
                </van-popup>-->
                <van-field
                        v-model="telephone"
                        name="telephone"
						type="tel"
                        :label="$t('str.telephone')"
                        :placeholder="$t('str.telephonePlaceholder')"
                />
				<van-field name="checkbox">
					<template #input>
						<van-checkbox v-model="checkbox" checked-color="#07c160" >
							{{$t('str.loginTips1')}}<span class="red" @click.stop="toTermsPage">{{$t('str.loginTips2')}}</span>
						</van-checkbox>
					</template>
				</van-field>

                <div class="vip-btn-wrap">
                    <van-button type="primary" class="vip-btn"
								@click="onSubmit"
                                block>{{$t('str.loginBtn1')}}</van-button>
                </div>
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
				countryCodeText: '中国 0086',
                countryCode: '0086',

                columns: [],
                showPicker: false,

                telephone: '',//9829666666
                code: '',
                codekey: '',
				checkbox: true,
                isGetting: false,
                gettingText: '',
                count: 60,
                COUNT_DEFAULT: 60,
                isSubmitting: false,
            }
        },
		created(){
			/*getCountryCodes().then((res)=>{
				const list = res.data || [];
				list.sort((item1,item2)=>{
					if(item1.is_hot < item2.is_hot){
						return 1;
					}else if(item1.is_hot > item2.is_hot){
						return -1;
					}else{
						return 0;
					}
				});
				list.forEach((item)=>{
					item.text = item.name +' '+ item.intl_code;
				});
				this.columns = list;
			});*/
		},
		computed: {
			isShowHeader() {
				const route = this.$route
				const { meta } = route
				return meta.showHeader
			},
		},
        methods: {
            onConfirm(value) {

                this.countryCode = value.intl_code;
                this.countryCodeText = value.text;

                this.showPicker = false;
            },
            onSubmit(){
				if(!this.telephone){
					this.$toast(this.$t('str.telephonePlaceholder'));
					return false;
				}

				this.toCodePage();

            },
			toCodePage(){
				this.$router.push({
					name:'code',
					params:{
						telephone:this.telephone,
						countryCode:this.countryCode
					}
				});
			},
			toTermsPage(){
				this.$router.push({name:'terms'});
			}
        }
    }
</script>
<style>

</style>