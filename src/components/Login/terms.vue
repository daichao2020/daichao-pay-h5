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

				<p class=MsoNormal><span lang=EN-US>Privacy Policy</span></p>

				<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

				<p class=MsoNormal><span lang=EN-US>The online loan application is a free
application. This service is provided free of charge and is intended to be used
as is.</span></p>

				<p class=MsoNormal><span lang=EN-US>If someone decides to use my service, this
page is used to inform visitors of my policy through the way we collect, use
and disclose personal information.</span></p>

				<p class=MsoNormal><span lang=EN-US>If you choose to use my service, you agree
to the collection and use of information related to this policy. The personal
information I collect is used to provide and improve services. Except as
described in this privacy policy, I will not use or share your information with
anyone.</span></p>

				<p class=MsoNormal><span lang=EN-US>Unless otherwise defined in this privacy
policy, the terms used in this privacy policy have the same meaning as our
terms and conditions and can be accessed through the &quot;Instant Loan
Guide&quot;.</span></p>

				<p class=MsoNormal><span lang=EN-US>Information collection and use</span></p>

				<p class=MsoNormal><span lang=EN-US>In order to get a better experience, when
using our services, I may ask you to provide us with certain personally
identifiable information. The information I request will remain on your device,
and I will not collect it in any way.</span></p>

				<p class=MsoNormal><span lang=EN-US>The application does use third-party
services, which may collect information to identify you.</span></p>

				<p class=MsoNormal><span lang=EN-US>Link to the privacy policy of the
third-party service provider used by the application</span></p>

				<p class=MsoNormal><span lang=EN-US>Google Play Services</span></p>

				<p class=MsoNormal><span lang=EN-US>Record data</span></p>

				<p class=MsoNormal><span lang=EN-US>I want to inform you that whenever you use
my service, if there is an error in the application, I will collect data and
information on your phone through a third-party product (called third-party
data). The log data may contain information such as the device's Internet
Protocol (&quot;IP&quot;) address, device name, operating system version,
application configuration when using &quot;My Service&quot;, the time and date
you use the service, and other statistical information. .</span></p>

				<p class=MsoNormal><span lang=EN-US>Cookies</span></p>

				<p class=MsoNormal><span lang=EN-US>Cookies are files with a small amount of
data, usually used as anonymous unique identifiers. This information will be
sent to the browser from the website you visit and stored in the device's
memory.</span></p>

				<p class=MsoNormal><span lang=EN-US>This service does not explicitly use these
&quot;cookies&quot;. However, the application may use third-party code and
libraries that use &quot;cookies&quot; to collect information and improve its
services. You can choose to accept or reject these cookies and know when to
send the cookie to your device. If you choose to reject our cookies, you may
not be able to use some parts of this service.</span></p>

				<p class=MsoNormal><span lang=EN-US>service provider</span></p>

				<p class=MsoNormal><span lang=EN-US>I may hire third-party companies and
individuals for the following reasons:</span></p>

				<p class=MsoNormal><span lang=EN-US>Promote our services;</span></p>

				<p class=MsoNormal><span lang=EN-US>Provide services on our behalf;</span></p>

				<p class=MsoNormal><span lang=EN-US>Perform service-related services; or</span></p>

				<p class=MsoNormal><span lang=EN-US>Help us analyze how to use our services.</span></p>

				<p class=MsoNormal><span lang=EN-US>I want to inform users of this service that
these third parties have the right to access your personal information. The
reason is to perform the tasks assigned to them on our behalf. However, they
are obliged not to disclose or use this information for any other purpose.</span></p>

				<p class=MsoNormal><span lang=EN-US>Safety</span></p>

				<p class=MsoNormal><span lang=EN-US>I value your trust in providing us with
your personal information, so we are working hard to use commercially
acceptable methods to protect it. But please keep in mind that neither the
transmission method nor the electronic storage method on the Internet is 100%
safe and reliable, and I cannot guarantee its absolute security.</span></p>

				<p class=MsoNormal><span lang=EN-US>Link to other websites</span></p>

				<p class=MsoNormal><span lang=EN-US>The service may contain links to other
sites. If you click on a third-party link, you will be directed to that site.
Please note that these external sites are not operated by me. Therefore, I
strongly recommend that you read the privacy policies of these websites. I have
no control over the content, privacy policy or behavior of any third-party site
or service, and I am not responsible for it.</span></p>

				<p class=MsoNormal><span lang=EN-US>Child privacy</span></p>

				<p class=MsoNormal><span lang=EN-US>These services are not for anyone under the
age of 13. I will not knowingly collect personally identifiable information
from children under 13 years of age. If I find that a child under the age of 13
has provided me with personal information, I will immediately delete this information
from our servers. If you are a parent or guardian and you know that your child
has provided us with personal information, please contact me so that I can take
the necessary measures.</span></p>

				<p class=MsoNormal><span lang=EN-US>Changes to this privacy policy</span></p>

				<p class=MsoNormal><span lang=EN-US>I may update our privacy policy from time
to time. Therefore, it is recommended that you check this page regularly to
make any changes. I will notify you of any changes by posting a new privacy
policy on this page.</span></p>

				<p class=MsoNormal><span lang=EN-US>contact us</span></p>

				<p class=MsoNormal><span lang=EN-US>If you have any questions or suggestions
about my privacy policy, please contact me at Xingbar786@gmail.com</span></p>

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
		.page-body{
			padding: 30px;
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