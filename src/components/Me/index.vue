<template>
	<div class="me-page">
		<header>
			<van-nav-bar
					title="Me"
					fixed
					placeholder
			></van-nav-bar>
		</header>
		<section class="page-body">
			<div class="user-info">
				<div class="avatar">
					<img class="head-img" src="@/assets/imgs/me/head.png">
				</div>
				<p class="user-name">{{ '未登录' }}</p>
			</div>

			<div class="custom-cell-area">
				<van-cell title="URL 跳转" is-link url="/vant/mobile.html" />
				<van-cell title="路由跳转" is-link to="index" />
			</div>
			<div class="custom-cell-area">
				<van-cell title="URL 跳转" is-link url="/vant/mobile.html" />
				<van-cell title="路由跳转" is-link to="index" />
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
		}
	}
</script>
<style>

</style>