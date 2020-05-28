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
			<h2 class="vip-doc-block__title">Contact information</h2>
			<van-form @submit="onSubmit">

				<p class="vip-form_title">Your Name</p>
				<van-field
						v-model="yourName"
						name="yname"
						placeholder="Please enter your name"
						:rules="[{ required: true, message: ' ' }]"
				/>
				<p class="vip-form_title">ID Number</p>
				<van-field
						v-model="idNumber"
						name="idNumber"
						placeholder="Please enter ID number"
						:rules="[{ required: true, message: ' ' }]"
				/>
				<p class="vip-form_title">PAN</p>
				<van-field
						v-model="pan"
						name="rname"
						placeholder="Please enter pan"
				/>
				<p class="vip-form_title">Your Email</p>
				<van-field
						v-model="yourEmail"
						name="yemail"
						placeholder="Please enter your email"
						:rules="[{ required: true, message: ' ' }]"
				/>

				<p class="vip-form_title">Bank Name</p>
				<van-field
						v-model="bankName"
						name="bankNo"
						placeholder="Please enter bank name"
						:rules="[{ required: true, message: ' ' }]"
				/>
				<p class="vip-form_title">Bank Account No.</p>
				<van-field
						v-model="bankNo"
						name="bankNo"
						placeholder="Please enter bank account No."
						:rules="[{ required: true, message: ' ' }]"
				/>
				<p class="vip-form_tips">Please make sure that you have entered the correct information.  The money will be disbursed to this bank account.</p>

				<p class="vip-form_title">Gender</p>
				<van-field
						readonly
						clickable
						name="gender"
						v-model="gender"
						placeholder="Please choose"
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

				<p class="vip-form_title">Education</p>
				<van-field
						readonly
						clickable
						name="education"
						v-model="education"
						placeholder="Please choose"
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

				<!--<p class="vip-form_title">Marital Status</p>
				<van-field
						readonly
						clickable
						name="maritalStatus"
						v-model="maritalStatus"
						placeholder="Please choose"
						right-icon="arrow"
						@click="showMaritalStatusPicker = true"
						:rules="[{ required: true, message: ' ' }]"
				/>
				<van-popup v-model="showMaritalStatusPicker" position="bottom">
					<van-picker
							show-toolbar
							:columns="maritalStatusColumns"
							@confirm="onConfirmMaritalStatus"
							@cancel="showMaritalStatusPicker = false"
					/>
				</van-popup>-->




				<div class="vip-btn-wrap">
					<van-button type="primary" class="vip-btn"
								:disabled="isSubmitting"
								:loading="isSubmitting"
								loading-text="Submitting..."
								native-type="submit"
								block>Continue</van-button>
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
				genderColumns: ['Male','Female','Third Gender'],

				education: '',//
				showEducationPicker: false,
				educationColumns: [
					'Doctor Degree',
					'Master Degree',
					'Bachelor Degree',
					'Undergraduate And Above',
					'High School',
					'Secondary School',
					'Junior High School And Below'],

				maritalStatus: '',//
				showMaritalStatusPicker: false,
				maritalStatusColumns: ['Married','Unmarried'],


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