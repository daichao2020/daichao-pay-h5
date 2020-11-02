<template>
	<div class="default-page policy-page">

		<header v-if="isShowHeader">
			<van-nav-bar
					title="Privacy policy"
					fixed
					placeholder
					left-arrow
					@click-left="onClickLeft"
			></van-nav-bar>
		</header>

		<section class="page-body">

			<div class=WordSection1 style='layout-grid:15.6pt'>

				<p class=MsoNormal><span>&nbsp;</span></p>

				<p class=MsoNormal><span>indiloan Privacy Policy&nbsp;
(&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) operates the indiloan
mobile application (the &quot;Service&quot;).</span></p>

				<p class=MsoNormal><span>&nbsp;</span></p>

				<p class=MsoNormal><span>This page informs you of our policies
regarding the collection, use, and disclosure of personal data when you use our
Service and the choices you have associated with that data.</span></p>

				<p class=MsoNormal><span>&nbsp;</span></p>

				<p class=MsoNormal><span>We use your data to provide and improve the
Service. By using the Service, you agree to the collection and use of
information in accordance with this policy. Unless otherwise defined in this
Privacy Policy, terms used in this Privacy Policy have the same meanings as in
our Terms and Conditions.</span></p>

				<p class=MsoNormal><span>&nbsp;</span></p>

				<p class=MsoNormal><span>Information Collection And Use </span></p>

				<p class=MsoNormal><span>We collect several different types of
information for various purposes to provide and improve our Service to you.</span></p>

				<p class=MsoNormal><span>&nbsp;</span></p>

				<p class=MsoNormal><span>Types of Data Collected Personal Data While
using our Service, we may ask you to provide us with certain personally
identifiable information that can be used to contact or identify you
(&quot;Personal Data&quot;). Personally identifiable information may include,
but is not limited to:</span></p>

				<p class=MsoNormal><span>&nbsp;</span></p>

				<p class=MsoNormal><span>First name and last name Phone number
Cookies and Usage Data</span></p>

				<p class=MsoNormal><span>&nbsp;</span></p>

				<p class=MsoNormal><span>Usage Data When you access the Service by
or through a mobile device, we may collect certain information automatically,
including, but not limited to, the type of mobile device you use, your mobile
device unique ID, the IP address of your mobile device, your mobile operating
system, the type of mobile Internet browser you use, unique device identifiers
and other diagnostic data (&quot;Usage Data&quot;).</span></p>

				<p class=MsoNormal><span>&nbsp;</span></p>

				<p class=MsoNormal><span>Tracking &amp; Cookies Data </span></p>

				<p class=MsoNormal><span>We use cookies and similar tracking
technologies to track the activity on our Service and hold certain information.</span></p>

				<p class=MsoNormal><span>&nbsp;</span></p>

				<p class=MsoNormal><span>Cookies are files with small amount of data
which may include an anonymous unique identifier. Cookies are sent to your
browser from a website and stored on your device. Tracking technologies also
used are beacons, tags, and scripts to collect and track information and to
improve and analyze our Service.</span></p>

				<p class=MsoNormal><span>&nbsp;</span></p>

				<p class=MsoNormal><span>You can instruct your browser to refuse all
cookies or to indicate when a cookie is being sent. However, if you do not
accept cookies, you may not be able to use some portions of our Service.</span></p>

				<p class=MsoNormal><span>&nbsp;</span></p>

				<p class=MsoNormal><span>Security Of Data. </span></p>

				<p class=MsoNormal><span>The security of your data is important to
us, but easy loans app does not require or take any user data. All user data is
stored locally on the users device. \n We shall not be responsible for any loss
suffered by you should the Services be interfered with or be unavailable.</span></p>

				<p class=MsoNormal><span>&nbsp;</span></p>

				<p class=MsoNormal><span>Service Providers. </span></p>

				<p class=MsoNormal><span>We may employ third party companies and
individuals to facilitate our Service (&quot;Service Providers&quot;), to
provide the Service on our behalf, to perform Service-related services or to
assist us in analyzing how our Service is used.</span></p>

				<p class=MsoNormal><span>&nbsp;</span></p>

				<p class=MsoNormal><span>These third parties have access to your
Personal Data only to perform these tasks on our behalf and are obligated not
to disclose or use it for any other purpose.</span></p>

				<p class=MsoNormal><span>&nbsp;</span></p>

				<p class=MsoNormal><span>Analytics. </span></p>

				<p class=MsoNormal><span>We may use third-party Service Providers to
monitor and analyze the use of our Service.</span></p>

				<p class=MsoNormal><span>&nbsp;</span></p>

				<p class=MsoNormal><span>Google Analytics</span></p>

				<p class=MsoNormal><span>Google Analytics is a web analytics service
offered by Google that tracks and reports website traffic. Google uses the data
collected to track and monitor the use of our Service. This data is shared with
other Google services. Google may use the collected data to contextualize and
personalize the ads of its own advertising network.</span></p>

				<p class=MsoNormal><span>&nbsp;</span></p>

				<p class=MsoNormal><span>For more information on the privacy practices
of Google, please visit the Google Privacy &amp; Terms web page:
https://policies.google.com/privacy?hl=en</span></p>

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
		.page-body {
			padding: .4rem;
		}
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