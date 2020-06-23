<template>
	<div class="default-page me-page">
		<header v-if="isShowHeader">
			<van-nav-bar
					title="Me"
					fixed
					placeholder
			></van-nav-bar>
		</header>
		<section class="page-body">
			<div class="user-info">
				<div class="avatar">
					<img class="head-img" :src="userInfo.avatar || 'imgs/me/head.png'">
				</div>
				<p class="user-name" v-if="userInfo.phone_number">{{ userInfo.nickname || userInfo.phone_number }}</p>
			</div>

			<div class="custom-cell-area">
				<van-cell :title="$t('str.feedback')" is-link to="/feedback" />
				<van-cell :title="$t('str.setNickName')" is-link to="/setnickname" />
				<van-cell :title="$t('str.modifyHeadPortrait')" is-link to="/setavatar" />
			</div>
			<div class="custom-cell-area">
				<van-cell :title="$t('str.aboutUs')" is-link to="/feedback"/>
				<van-cell :title="$t('str.contactUs')" :label="$t('str.contactUsLabel')" is-link  to="/feedback"/>
				<van-cell :title="$t('str.cancellation')" is-link  to="/feedback"/>
				<van-cell :title="$t('str.privacyPolicy')" is-link  to="/feedback"/>
			</div>
			<div class="custom-cell-area">
				<van-cell :title="$t('str.logout')" is-link @click="logout" />
			</div>

		</section>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		mounted() {

		},
		computed: {
			isShowHeader() {
				const route = this.$route
				const { meta } = route
				return meta.showHeader
			},
			userInfo(){
				return this.$store.getters.info
			},
		},
		methods: {
			async logout() {
				await this.$store.dispatch('user/logout')
				this.$router.push(`/login?redirect=${this.$route.fullPath}`)
			},
		}
	}
</script>
<style>

</style>