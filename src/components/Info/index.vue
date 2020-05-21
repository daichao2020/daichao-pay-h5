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
				<p class="vip-form_title">Relatives name</p>
				<van-field
						v-model="rname"
						name="rname"
						placeholder="Please enter relatives name"
						:rules="[{ required: true, message: ' ' }]"
				/>

				<p class="vip-form_title">Relationship with myself</p>
				<van-field
						readonly
						clickable
						name="rpicker"
						v-model="rnameRelationship"
						placeholder="Please choose"
						right-icon="arrow"
						@click="showRnameRelPicker()"
						:rules="[{ required: true, message: ' ' }]"
				/>
				<van-popup v-model="showRnameRelationshipPicker" position="bottom">
					<van-picker
							show-toolbar
							:columns="columns"
							@confirm="onConfirmRnameRelationship"
							@cancel="hideRnameRelPicker()"
					/>
				</van-popup>

				<p class="vip-form_title">Relatives Tel</p>
				<van-field
						placeholder="Please enter relatives tel"
						type="tel"
						v-model="rtel"
						:rules="[{ required: true, message: ' ' }]"
				/>

				<!-------------------->
				<p class="vip-form_title">Friend name</p>
				<van-field
						v-model="fname"
						placeholder="Please enter friend name"
						:rules="[{ required: true, message: ' ' }]"
				/>

				<p class="vip-form_title">Relationship with myself</p>
				<van-field
						readonly
						clickable
						name="fpicker"
						v-model="fnameRelationship"
						placeholder="Please choose"
						right-icon="arrow"
						@click="showFnameRelPicker()"
						:rules="[{ required: true, message: ' ' }]"
				/>
				<van-popup v-model="showFnameRelationshipPicker" position="bottom">
					<van-picker
							show-toolbar
							:columns="columns"
							@confirm="onConfirmFnameRelationship"
							@cancel="hideFnameRelPicker()"
					/>
				</van-popup>

				<p class="vip-form_title">Friend Tel</p>
				<van-field
						placeholder="Please enter relatives tel"
						type="tel"
						v-model="ftel"
						:rules="[{ required: true, message: ' ' }]"
				/>

				<div class="vip-btn-wrap">
					<van-button type="primary" class="vip-btn"
								native-type="submit"
								block>Continue</van-button>
				</div>
			</van-form>
		</section>

	</div>
</template>
<script>
	import { getCountryCodes,getVerificationCodes } from '@/api/user'
	import defaultSettings from '@/settings'
	export default {
		data(){
			return {

				columns: ['myself'],

				rname: '',//
				rtel: '',//
				rnameRelationship: '',//
				showRnameRelationshipPicker: false,

				fname: '',//
				ftel: '',//
				fnameRelationship: '',//
				showFnameRelationshipPicker: false,

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
			onConfirmRnameRelationship(value) {
				this.rnameRelationship = value;
				this.hideRnameRelPicker();
			},

			showRnameRelPicker(){
				this.showRnameRelationshipPicker = true;
			},
			hideRnameRelPicker(){
				this.showRnameRelationshipPicker = false;
			},
			onConfirmFnameRelationship(value) {
				this.fnameRelationship = value;
				this.hideFnameRelPicker();
			},
			showFnameRelPicker(){
				this.showFnameRelationshipPicker = true;
			},
			hideFnameRelPicker(){
				this.showFnameRelationshipPicker = false;
			},

			onSubmit(){

				/*if(!this.rname){
					this.$toast('Please enter relatives name');return false;
				}
				if(!this.rtel){
					this.$toast('Please enter relatives tel');return false;
				}
				if(!this.rnameRelationship){
					this.$toast('Please choose relationship with myself');return false;
				}
				if(!this.fname){
					this.$toast('Please enter friend name');return false;
				}
				if(!this.ftel){
					this.$toast('Please enter friend tel');return false;
				}
				if(!this.fnameRelationship){
					this.$toast('Please choose relationship with myself');return false;
				}*/

				this.toVipPage();

			},
			toVipPage(){
				this.$router.push({
					name:'vip',
				});
			},
		}
	}
</script>
<style>

</style>