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
			<h2 class="vip-doc-block__title">{{$t('str.contactInformation')}}</h2>
			<van-form @submit="onSubmit">

				<p class="vip-form_title">{{$t('str.yourName')}}</p>
				<van-field
						v-model="yourName"
						name="yname"
						:placeholder="$t('str.yourNamePlaceholder')"
						:rules="[{ required: true, message: ' ' }]"
				/>
				<p class="vip-form_title">{{$t('str.IDNumber')}}</p>
				<van-field
						v-model="idNumber"
						name="idNumber"
						:placeholder="$t('str.IDNumberPlaceholder')"
						:rules="[{ required: true, message: ' ' }]"
				/>
				<p class="vip-form_title">{{$t('str.PAN')}}</p>
				<van-field
						v-model="pan"
						name="rname"
						:placeholder="$t('str.PANPlaceholder')"
				/>
				<p class="vip-form_title">{{$t('str.yourEmail')}}</p>
				<van-field
						v-model="yourEmail"
						name="yemail"
						:placeholder="$t('str.yourEmailPlaceholder')"
						:rules="[{ required: true, message: ' ' }]"
				/>

				<p class="vip-form_title">{{$t('str.bankName')}}</p>
				<van-field
						v-model="bankName"
						name="bankNo"
						:placeholder="$t('str.bankNamePlaceholder')"
						:rules="[{ required: true, message: ' ' }]"
				/>
				<p class="vip-form_title">{{$t('str.bankAccountNo')}}</p>
				<van-field
						v-model="bankNo"
						name="bankNo"
						:placeholder="$t('str.bankAccountNoPlaceholder')"
						:rules="[{ required: true, message: ' ' }]"
				/>
				<p class="vip-form_tips">{{$t('str.infoTips1')}}</p>

				<p class="vip-form_title">{{$t('str.gender')}}</p>
				<van-field
						readonly
						clickable
						name="gender"
						v-model="gender"
						:placeholder="$t('str.pleaseChoose')"
						right-icon="arrow"
						@click="showGenderPicker = true"
						:rules="[{ required: true, message: ' ' }]"
				/>
				<van-popup v-model="showGenderPicker" position="bottom">
					<van-picker
							show-toolbar
							:columns="genderColumns"
							@confirm="onConfirmGender"
							@cancel="showGenderPicker = false"
					/>
				</van-popup>

				<p class="vip-form_title">{{$t('str.education')}}</p>
				<van-field
						readonly
						clickable
						name="education"
						v-model="education"
						:placeholder="$t('str.pleaseChoose')"
						right-icon="arrow"
						@click="showEducationPicker = true"
						:rules="[{ required: true, message: ' ' }]"
				/>
				<van-popup v-model="showEducationPicker" position="bottom">
					<van-picker
							show-toolbar
							:columns="educationColumns"
							@confirm="onConfirmEducation"
							@cancel="showEducationPicker = false"
					/>
				</van-popup>



				<div class="vip-btn-wrap">
					<van-button type="primary" class="vip-btn"
								:disabled="isSubmitting"
								:loading="isSubmitting"
								:loading-text="$t('str.submitting')"
								native-type="submit"
								block>{{$t('str.continue')}}</van-button>
				</div>
			</van-form>
		</section>

	</div>
</template>
<script>
	export default {
		data(){
			return {



				yourName: '',//
				idNumber: '',//
				pan: '',//
				yourEmail: '',//

				bankName: '',//
				bankNo: '',//

				gender: '',//
				showGenderPicker: false,
				genderColumns: [
					this.$t('str.male'),
					this.$t('str.female'),
					this.$t('str.thirdGender'),
				],

				education: '',//
				showEducationPicker: false,
				educationColumns: [
					this.$t('str.doctorDegree'),
					this.$t('str.masterDegree'),
					this.$t('str.bachelorDegree'),
					this.$t('str.undergraduateAndAbove'),
					this.$t('str.highSchool'),
					this.$t('str.secondarySchool'),
					this.$t('str.juniorHighSchoolAndBelow')
				],

				maritalStatus: '',//
				showMaritalStatusPicker: false,
				maritalStatusColumns: [
					this.$t('str.married'),
					this.$t('str.unmarried')
				],


				isSubmitting: false,

			}
		},
		created(){

		},
		computed: {
			isShowHeader() {
				const route = this.$route
				const { meta } = route
				return meta.showHeader
			},
		},
		methods: {
			onConfirmGender(value) {
				this.gender = value;
				this.showGenderPicker = false;
			},

			onConfirmEducation(value) {
				this.education = value;
				this.showEducationPicker = false;
			},

			onConfirmMaritalStatus(value) {
				this.maritalStatus = value;
				this.showMaritalStatusPicker = false;
			},


			onSubmit(){
				this.toEndPage();
			},
			toEndPage(){
				this.$router.replace({
					name:'end',
				});
			},
		}
	}
</script>
<style>

</style>