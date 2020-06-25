<template>
	<div class="default-page terms-page">
		<header v-if="isShowHeader">
			<van-nav-bar
					title="Terms & Conditions"
					fixed
					left-arrow
					@click-left="onClickLeft"
					placeholder
			></van-nav-bar>
		</header>
		<section class="page-body">
			<div class=WordSection1 style='layout-grid:15.6pt'>

				<p class=MsoNormal>
					privacy policy
				</p>
				<p class=MsoNormal>
					The Privacy Policy of this service (hereinafter "we, us, our, us, our, the Site, the Service") is the official document that Identify and explain the information collected on the Service by users ("User", "User", "You", "Your", "Your") , storage, sharing and use. This document is intended to provide formal assurance of the protection and security of the information provided on the Services.
				</p>
				<p class=MsoNormal>
					This Privacy Policy defines the meaning of personal and non-personal information used on the Service. If you have shared information about the Service and wish to be removed from any record associated with the Service at our discretion For more information about the Service, you may contact us directly using the contact information we have provided on the Service.
				</p>
				<p class=MsoNormal>
					The Services provided on the Service may only be used by legal residents over the age of 18. Once you are willing to register for the Service by submitting your information via the online form and accepting this Privacy Policy and the Terms of Use of the Service, you are Acknowledge that you understand that your use of information submitted on this website is governed by these documents. Accordingly, you are encouraged to carefully study these documents before submitting information about the Service.
				</p>
				<p class=MsoNormal>
					If you disagree with or misunderstand the terms of the Service's Terms of Use and Privacy Policy and/or reject the provisions of these documents, you should Discontinue use of the Services and shall not provide your information and proceed to register to submit through an online form or any other means and Sharing information about you on the Services. If you have questions about the Service or its use, you may contact us using the details we provide about the Service. If you wish to refuse to use the Service, you should close this and other pages on this Service.
				</p>
				<p class=MsoNormal>
					I. Personal and Non-Personally Identifiable Information
				</p>
				<p class=MsoNormal>
					In order to register for the Service and use its services, you are required to provide your personally identifiable information (PII) via an online form on the Service. This information is collected, stored, shared, and used in the manner set forth in this Privacy Policy. This information is critical to providing you with the services you have requested through the use of the Services. If you do not need to use the Services or for some reason decide to stop using the Services, you should not submit your PII on the Services Information. PII includes, but is not limited to, the following information: your first and last name, address, email address, phone number, date of birth. Employment information, social security number, other ID information, bank information.
				</p>
				<p class=MsoNormal>
					Note: Bank information is only used to provide you with search and contact services and is never shared with any third party marketers or other third parties! unless the contrary is determined by law or pursuant to a special order of the authorizing party (including, but not limited to) limited national security concerns or (similar issues).
				</p>
				<p class=MsoNormal>
					In addition to PII, we collect Non-Personally Identifiable Information (NPII) that you can use when using the Services without the need for the Submitting any Personal Information on the Service. NPII includes, but is not limited to, user behavior data, such as Internet Protocol (IP) data, browser Details, geographic location, user's operating system, referral and exit pages, date and time details. Internet Service Provider Details, etc. The NPII we charge you may be transmitted to third parties with whom we have contracted, unless you use a means or expression of concealed NPII. You directly stop using NPII requests.
				</p>
				<p class=MsoNormal>
					Your use of PII
				</p>
				<p class=MsoNormal>
					We collect, store, share and use your PII information in accordance with this Privacy Policy. All information you provide is protected by our top security measures and encryption methods. The information you submit through the Registration Service will be used to perform searches and to contact one or more lenders.
				</p>
				<p class=MsoNormal>
					Translated with www.DeepL.com/Translator (free version)
				</p>

			</div>
		</section>
		<footer class="page-footer">

		</footer>
	</div>
</template>
<script>
	export default {

		data(){
			return {
			}
		},
		computed: {
			isShowHeader() {
				const route = this.$route
				const { meta } = route
				return meta.showHeader
			},
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			},
		}

	}
</script>
<style lang="scss">
	.terms-page{
		p.MsoNormal, li.MsoNormal, div.MsoNormal
		{margin:0cm;
			margin-bottom:.0001pt;
			text-justify:inter-ideograph;
			font-size:10.5pt;
			font-family:"Calibri",sans-serif;}
		/* Page Definitions */
		@page WordSection1
		{size:595.3pt 841.9pt;
			margin:72.0pt 90.0pt 72.0pt 90.0pt;
			layout-grid:15.6pt;}
		div.WordSection1
		{page:WordSection1;}
	}

</style>