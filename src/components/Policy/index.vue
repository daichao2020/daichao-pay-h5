<template>
	<div class="default-page policy-page">

		<header v-if="isShowHeader">
			<van-nav-bar
					title="Privacy policy"
					fixed
					placeholder
			></van-nav-bar>
		</header>

		<section class="page-body">

			<div class=WordSection1 style='layout-grid:15.6pt'>

				<p class=MsoNormal><span lang=EN-US >Privacy
Policy</span></p>

				<p class=MsoNormal><span lang=EN-US >&nbsp;the
myloan app as a Free app. This SERVICE is provided&nbsp; at no cost and is
intended for use as is.</span></p>

				<p class=MsoNormal><span lang=EN-US >&nbsp;</span></p>

				<p class=MsoNormal><span lang=EN-US >This
page is used to inform visitors regarding my policies with the collection, use,
and disclosure of Personal Information if anyone decided to use my Service.</span></p>

				<p class=MsoNormal><span lang=EN-US >&nbsp;</span></p>

				<p class=MsoNormal><span lang=EN-US >If
you choose to use my Service, then you agree to the collection and use of
information in relation to this policy. The Personal Information that I collect
is used for providing and improving the Service. I will not use or share your
information with anyone except as described in this Privacy Policy.</span></p>

				<p class=MsoNormal><span lang=EN-US >&nbsp;</span></p>

				<p class=MsoNormal><span lang=EN-US >The
terms used in this Privacy Policy have the same meanings as in our Terms and
Conditions, which is accessible at myloan unless otherwise defined in this
Privacy Policy.</span></p>

				<p class=MsoNormal><span lang=EN-US >&nbsp;</span></p>

				<p class=MsoNormal><span lang=EN-US >Information
Collection and Use</span></p>

				<p class=MsoNormal><span lang=EN-US >&nbsp;</span></p>

				<p class=MsoNormal><span lang=EN-US >myloan
verifies your identity and assesses your credits by collecting your full legal
name, national ID, Mobile number (Submitted Information). No loan can be
disbursed if the data is missing. Note that we take your privacy seriously. All
your data is well encrypted and secured. We promise that we never share or sell
your information with third parties without your permission.</span></p>

				<p class=MsoNormal><span lang=EN-US >&nbsp;</span></p>

				<p class=MsoNormal><span lang=EN-US >Security</span></p>

				<p class=MsoNormal><span lang=EN-US >&nbsp;</span></p>

				<p class=MsoNormal><span lang=EN-US >I
value your trust in providing us your Personal Information, thus we are
striving to use commercially acceptable means of protecting it. But remember
that no method of transmission over the internet, or method of electronic
storage is 100% secure and reliable, and I cannot guarantee its absolute
security.</span></p>

				<p class=MsoNormal><span lang=EN-US >&nbsp;</span></p>

				<p class=MsoNormal><span lang=EN-US >Links
to Other Sites</span></p>

				<p class=MsoNormal><span lang=EN-US >&nbsp;</span></p>

				<p class=MsoNormal><span lang=EN-US >This
Service may contain links to other sites. If you click on a third-party link,
you will be directed to that site. Note that these external sites are not
operated by me. Therefore, I strongly advise you to review the Privacy Policy
of these websites. I have no control over and assume no responsibility for the
content, privacy policies, or practices of any third-party sites or services.</span></p>

				<p class=MsoNormal><span lang=EN-US >&nbsp;</span></p>

				<p class=MsoNormal><span lang=EN-US >Children</span><span
				>’<span lang=EN-US>s Privacy</span></span></p>

				<p class=MsoNormal><span lang=EN-US >&nbsp;</span></p>

				<p class=MsoNormal><span lang=EN-US >These
Services do not address anyone under the age of 13. I do not knowingly collect
personally identifiable information from children under 13. In the case I
discover that a child under 13 has provided me with personal information, I
immediately delete this from our servers. If you are a parent or guardian and
you are aware that your child has provided us with personal information, please
contact me so that I will be able to do necessary actions.</span></p>

				<p class=MsoNormal><span lang=EN-US >&nbsp;</span></p>

				<p class=MsoNormal><span lang=EN-US >Changes
to This Privacy Policy</span></p>

				<p class=MsoNormal><span lang=EN-US >&nbsp;</span></p>

				<p class=MsoNormal><span lang=EN-US >I
may update our Privacy Policy from time to time. Thus, you are advised to
review this page periodically for any changes. I will notify you of any changes
by posting the new Privacy Policy on this page. These changes are effective
immediately after they are posted on this page.</span></p>

				<p class=MsoNormal><span lang=EN-US >&nbsp;</span></p>

				<p class=MsoNormal><span lang=EN-US >Contact
Us</span></p>

				<p class=MsoNormal><span lang=EN-US >&nbsp;</span></p>

				<p class=MsoNormal><span lang=EN-US >If
you have any questions or suggestions about my Privacy Policy, do not hesitate
to contact me at Appengineer101@gmail.com.</span></p>

			</div>


		</section>
	</div>
</template>
<script>

	export default {
		data(){
			return {

			}
		},
		mounted(){

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
	.policy-page{
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