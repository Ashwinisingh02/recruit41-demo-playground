import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Navbar from "../components/site/Navbar";
import Footer from "../components/site/Footer";

const Privacy = () => {
  const location = useLocation();
  const canonical = typeof window !== 'undefined' ? window.location.origin + location.pathname : '';

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy & Terms - Recruit41</title>
        <meta name="description" content="Privacy Policy and Terms & Conditions for Recruit41 AI Interview Platform. Legal terms governing your use of our services." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <Navbar />

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8">PRIVACY POLICY / TERMS & CONDITIONS</h1>
          <p className="text-lg text-muted-foreground mb-8">Last updated February 05, 2025</p>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">AGREEMENT TO OUR LEGAL TERMS</h2>
            <p className="mb-4">We are Voqalize Technologies Pvt Ltd , doing business as Recruit41 ("Company," "we," "us," "our"), a company registered in India at 503, Block 17B, Suncity Apartments, Bellandur, Bengaluru , Karnataka 560102.</p>
            
            <p className="mb-4">We operate the website www.recruit41.com (the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").</p>
            
            <p className="mb-4">You can contact us by mail to No. L, 367, 5th Main Rd, Sector 6, HSR Layout, Bengaluru, Karnataka 560102, India, or email at contact@recruit.com.</p>
            
            <p className="mb-4">These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and Voqalize Technologies Pvt Ltd , concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</p>
            
            <p>Our Services are intended for users who are at least 13 years of age. All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of their parent or guardian to use the Services. If you are a minor, you must have your parent or guardian read and agree to these Legal Terms prior to you using the Services.</p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Table of Contents</h3>
            <div className="bg-card p-6 rounded-lg border">
              <ol className="space-y-2">
                <li><a href="#our-services" className="text-primary hover:underline">1. OUR SERVICES</a></li>
                <li><a href="#intellectual-property" className="text-primary hover:underline">2. INTELLECTUAL PROPERTY RIGHTS</a>
                  <ul className="ml-4 mt-2 space-y-1">
                    <li><a href="#our-intellectual-property" className="text-primary hover:underline">2.1. Our intellectual property</a></li>
                    <li><a href="#your-use-services" className="text-primary hover:underline">2.2. Your use of our Services</a></li>
                    <li><a href="#submissions-contributions" className="text-primary hover:underline">2.3. Your submissions and contributions</a></li>
                  </ul>
                </li>
                <li><a href="#user-representations" className="text-primary hover:underline">3. USER REPRESENTATIONS</a></li>
                <li><a href="#user-registration" className="text-primary hover:underline">4. USER REGISTRATION</a></li>
                <li><a href="#purchases-payment" className="text-primary hover:underline">5. PURCHASES AND PAYMENT</a></li>
                <li><a href="#prohibited-activities" className="text-primary hover:underline">6. PROHIBITED ACTIVITIES</a></li>
                <li><a href="#user-generated-contributions" className="text-primary hover:underline">7. USER GENERATED CONTRIBUTIONS</a></li>
                <li><a href="#contribution-license" className="text-primary hover:underline">8. CONTRIBUTION LICENSE</a></li>
                <li><a href="#social-media" className="text-primary hover:underline">9. SOCIAL MEDIA</a></li>
                <li><a href="#services-management" className="text-primary hover:underline">10. SERVICES MANAGEMENT</a></li>
                <li><a href="#privacy-policy" className="text-primary hover:underline">11. PRIVACY POLICY</a></li>
                <li><a href="#term-termination" className="text-primary hover:underline">12. TERM AND TERMINATION</a></li>
                <li><a href="#modifications-interruptions" className="text-primary hover:underline">13. MODIFICATIONS AND INTERRUPTIONS</a></li>
                <li><a href="#governing-law" className="text-primary hover:underline">14. GOVERNING LAW</a></li>
                <li><a href="#dispute-resolution" className="text-primary hover:underline">15. DISPUTE RESOLUTION</a>
                  <ul className="ml-4 mt-2 space-y-1">
                    <li><a href="#informal-negotiations" className="text-primary hover:underline">15.1. Informal Negotiations</a></li>
                    <li><a href="#binding-arbitration" className="text-primary hover:underline">15.2. Binding Arbitration</a></li>
                    <li><a href="#restrictions" className="text-primary hover:underline">15.3. Restrictions</a></li>
                    <li><a href="#exceptions-arbitration" className="text-primary hover:underline">15.4. Exceptions to Informal Negotiations and Arbitration</a></li>
                  </ul>
                </li>
                <li><a href="#corrections" className="text-primary hover:underline">16. CORRECTIONS</a></li>
                <li><a href="#disclaimer" className="text-primary hover:underline">17. DISCLAIMER</a></li>
                <li><a href="#limitations-liability" className="text-primary hover:underline">18. LIMITATIONS OF LIABILITY</a></li>
                <li><a href="#indemnification" className="text-primary hover:underline">19. INDEMNIFICATION</a></li>
                <li><a href="#user-data" className="text-primary hover:underline">20. USER DATA</a></li>
                <li><a href="#user-rights" className="text-primary hover:underline">21. USER RIGHTS & PREFERENCES AS A DATA SUBJECT</a></li>
                <li><a href="#electronic-communications" className="text-primary hover:underline">22. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</a></li>
                <li><a href="#miscellaneous" className="text-primary hover:underline">23. MISCELLANEOUS</a></li>
                <li><a href="#consent-video-audio" className="text-primary hover:underline">24. CONSENT OF USE OF VIDEO / AUDIO / ENTIRE INTERVIEW MATERIAL FOR PROCESSING</a></li>
                <li><a href="#interview-processing" className="text-primary hover:underline">25. INTERVIEW PROCESSING FOR ADDITIONAL OPPORTUNITIES</a></li>
                <li><a href="#ai-provisions" className="text-primary hover:underline">26. ADDITIONAL PROVISIONS FOR AI-DRIVEN INTERVIEW PROCESSING AND DATA SECURITY</a>
                  <ul className="ml-4 mt-2 space-y-1">
                    <li><a href="#ai-decision-support" className="text-primary hover:underline">26.1. AI-Driven Decision Support Disclaimer</a></li>
                    <li><a href="#data-security-breach" className="text-primary hover:underline">26.2. Data Security and Breach Protocols</a></li>
                    <li><a href="#algorithmic-transparency" className="text-primary hover:underline">26.3. Algorithmic Transparency and Non-Discrimination</a></li>
                  </ul>
                </li>
                <li><a href="#contact-us" className="text-primary hover:underline">27. CONTACT US</a></li>
              </ol>
            </div>
          </div>

          <section id="our-services" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">1. OUR SERVICES</h2>
            <p className="mb-4">The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.</p>
            
            <p><strong>US SPECIFIC:</strong> The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).</p>
          </section>

          <section id="intellectual-property" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">2. INTELLECTUAL PROPERTY RIGHTS</h2>
            
            <div id="our-intellectual-property" className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">2.1. Our intellectual property</h3>
              <p className="mb-4">We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").</p>
              
              <p>Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties around the world.</p>
            </div>

            <div id="your-use-services" className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">2.2. Your use of our Services</h3>
              <p className="mb-4">Subject to your compliance with these Legal Terms, including the "PROHIBITED ACTIVITIES" section below, we grant you the right to access the Services</p>
              
              <p className="mb-4">Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</p>
              
              <p className="mb-4">If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: swetha@recruit41.com. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.</p>
              
              <p className="mb-4">We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.</p>
              
              <p>Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.</p>
            </div>

            <div id="submissions-contributions" className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">2.3. Your submissions and contributions</h3>
              <p className="mb-4">Please review this section and the "PROHIBITED ACTIVITIES" section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.</p>
              
              <p className="mb-4"><strong>Submissions:</strong> By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.</p>
              
              <p className="mb-4"><strong>Contributions:</strong> The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality during which you may create, submit, post, display, transmit, publish, distribute, or broadcast content and materials to us or through the Services, including but not limited to text, writings, video, audio, photographs, music, graphics, comments, reviews, rating suggestions, personal information, or other material ("Contributions"). Any Submission that is publicly posted shall also be treated as a Contribution.</p>
              
              <p className="mb-4">You understand that Contributions may be viewable by other users of the Services.</p>
              
              <p className="mb-4"><strong>When you post Contributions, you grant us a license (including use of your name, trademarks, and logos):</strong> By posting any Contributions, you grant us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to: use, copy, reproduce, distribute, sell, resell, publish, broadcast, retitle, store, publicly perform, publicly display, reformat, translate, excerpt (in whole or in part), and exploit your Contributions (including, without limitation, your image, name, and voice) for any purpose, commercial, advertising, or otherwise, to prepare derivative works of, or incorporate into other works, your Contributions, and to sublicense the licenses granted in this section. Our use and distribution may occur in any media formats and through any media channels.</p>
              
              <p className="mb-4">This license includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide.</p>
              
              <p className="mb-4"><strong>You are responsible for what you post or upload:</strong> By sending us Submissions and/or posting Contributions through any part of the Services or making Contributions accessible through the Services by linking your account through the Services to any of your social networking accounts, you:</p>
              <ul className="mb-4 pl-6 space-y-2">
                <li>confirm that you have read and agree with our "PROHIBITED ACTIVITIES" and will not post, send, publish, upload, or transmit through the Services any Submission nor post any Contribution that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;</li>
                <li>to the extent permissible by applicable law, waive any and all moral rights to any such Submission and/or Contribution;</li>
                <li>warrant that any such Submission and/or Contributions are original to you or that you have the necessary rights and licenses to submit such Submissions and/or Contributions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions and/or Contributions; and</li>
                <li>warrant and represent that your Submissions and/or Contributions do not constitute confidential information.</li>
              </ul>
              <p className="mb-4">You are solely responsible for your Submissions and/or Contributions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party's intellectual property rights, or (c) applicable law.</p>
              
              <p><strong>We may remove or edit your Content:</strong> Although we have no obligation to monitor any Contributions, we shall have the right to remove or edit any Contributions at any time without notice if in our reasonable opinion we consider such Contributions harmful or in breach of these Legal Terms. If we remove or edit any such Contributions, we may also suspend or disable your account and report you to the authorities.</p>
            </div>
          </section>

          <section id="user-representations" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">3. USER REPRESENTATIONS</h2>
            <p className="mb-4">By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Legal Terms; (4) you are not under the age of 13; (5) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Services; (6) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (7) you will not use the Services for any illegal or unauthorized purpose; and (8) your use of the Services will not violate any applicable law or regulation.</p>
            
            <p>If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).</p>
          </section>

          <section id="user-registration" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">4. USER REGISTRATION</h2>
            <p>You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.</p>
          </section>

          <section id="purchases-payment" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">5. PURCHASES AND PAYMENT</h2>
            <p className="mb-4">All purchases are non-refundable.</p>
            
            <p className="mb-4">We accept the following forms of payment:</p>
            <ul className="mb-4 pl-6 space-y-1">
              <li>Credit / Debit cards</li>
              <li>Bank transfer</li>
              <li>UPI</li>
            </ul>
            
            <p className="mb-4">You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Tax will be added to the price of purchases as mandated by the government. We may change prices at any time. All payments shall be in INR.</p>
            
            <p className="mb-4">You agree to pay all charges at the prices then in effect for your purchases, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.</p>
            
            <p>We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.</p>
          </section>

          <section id="prohibited-activities" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">6. PROHIBITED ACTIVITIES</h2>
            <p className="mb-4">You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
            
            <p className="mb-4">As a user of the Services, you agree not to:</p>
            <ul className="mb-4 pl-6 space-y-2">
              <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
              <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords, impersonate others, share wrong personal information.</li>
              <li>Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying or enforce limitations on the use of the Services and/or the Content contained therein.</li>
              <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
              <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
              <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
              <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
              <li>Engage in unauthorized framing of or linking to the Services.</li>
              <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party's uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</li>
              <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
              <li>Delete the copyright or other proprietary rights notice from any Content.</li>
              <li>Attempt to impersonate another user or person or use the username of another user.</li>
              <li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms").</li>
              <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
              <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
              <li>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</li>
              <li>Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
              <li>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</li>
              <li>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.</li>
              <li>Use a buying agent or purchasing agent to make purchases on the Services.</li>
              <li>Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
              <li>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
              <li>Sell or otherwise transfer your profile.</li>
            </ul>
          </section>

          <section id="user-generated-contributions" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">7. USER GENERATED CONTRIBUTIONS</h2>
            <p className="mb-4">The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you thereby represent and warrant that:</p>
            <ul className="mb-4 pl-6 space-y-2">
              <li>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</li>
              <li>You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.</li>
              <li>You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.</li>
              <li>Your Contributions are not false, inaccurate, or misleading.</li>
              <li>Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</li>
              <li>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).</li>
              <li>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li>
              <li>Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.</li>
              <li>Your Contributions do not violate any applicable law, regulation, or rule.</li>
              <li>Your Contributions do not violate the privacy or publicity rights of any third party.</li>
              <li>Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.</li>
              <li>Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</li>
              <li>Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.</li>
            </ul>
            <p>Any use of the Services in violation of the foregoing violates these Legal Terms and may result in, among other things, termination or suspension of your rights to use the Services.</p>
          </section>

          <section id="contribution-license" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">8. CONTRIBUTION LICENSE</h2>
            <p className="mb-4">By posting your Contributions to any part of the Services or making Contributions accessible to the Services by linking your account from the Services to any of your social networking accounts, you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions (including, without limitation, your image and voice) for any purpose, commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into other works, such Contributions, and grant and authorize sublicenses of the foregoing. The use and distribution may occur in any media formats and through any media channels.</p>
            
            <p className="mb-4">This license will apply to any form, media, or technology now known or hereafter developed, and includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide. You waive all moral rights in your Contributions, and you warrant that moral rights have not otherwise been asserted in your Contributions.</p>
            
            <p className="mb-4">We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.</p>
            
            <p>We have the right, in our sole and absolute discretion, (1) to edit, redact, or otherwise change any Contributions; (2) to re-categorize any Contributions to place them in more appropriate locations on the Services; and (3) to pre-screen or delete any Contributions at any time and for any reason, without notice. We have no obligation to monitor your Contributions.</p>
          </section>

          <section id="social-media" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">9. SOCIAL MEDIA</h2>
            <p className="mb-4">As part of the functionality of the Services, you may link your account with online accounts you have with third-party service providers (each such account, a "Third-Party Account") by either: (1) providing your Third-Party Account login information through the Services; or (2) allowing us to access your Third-Party Account, as is permitted under the applicable terms and conditions that govern your use of each Third-Party Account. You represent and warrant that you are entitled to disclose your Third-Party Account login information to us and/or grant us access to your Third-Party Account, without breach by you of any of the terms and conditions that govern your use of the applicable Third-Party Account, and without obligating us to pay any fees or making us subject to any usage limitations imposed by the third-party service provider of the Third-Party Account. By granting us access to any Third-Party Accounts, you understand that (1) we may access, make available, and store (if applicable) any content that you have provided to and stored in your Third-Party Account (the "Social Network Content") so that it is available on and through the Services via your account, including without limitation any friend lists and (2) we may submit to and receive from your Third-Party Account additional information to the extent you are notified when you link your account with the Third-Party Account. Depending on the Third-Party Accounts you choose and subject to the privacy settings that you have set in such Third-Party Accounts, personally identifiable information that you post to your Third-Party Accounts may be available on and through your account on the Services. Please note that if a Third-Party Account or associated service becomes unavailable or our access to such Third-Party Account is terminated by the third-party service provider, then Social Network Content may no longer be available on and through the Services. You will have the ability to disable the connection between your account on the Services and your Third-Party Accounts at any time. PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE PROVIDERS. We make no effort to review any Social Network Content for any purpose, including but not limited to, for accuracy, legality, or non-infringement, and we are not responsible for any Social Network Content. You acknowledge and agree that we may access your email address book associated with a Third-Party Account and your contacts list stored on your mobile device or tablet computer solely for purposes of identifying and informing you of those contacts who have also registered to use the Services. You can deactivate the connection between the Services and your Third-Party Account by contacting us using the contact information below or through your account settings (if applicable). We will attempt to delete any information stored on our servers that was obtained through such a Third-Party Account, except the username and profile picture that become associated with your account.</p>
          </section>

          <section id="services-management" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">10. SERVICES MANAGEMENT</h2>
            <p>We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.</p>
          </section>

          <section id="privacy-policy" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">11. PRIVACY POLICY</h2>
            <p className="mb-4">We care about data privacy and security. By using the Services, you agree to be bound by our Privacy Policy posted on the Services, which is incorporated into these Legal Terms. Please be advised the Services are hosted on Google Cloud in the Mumbai region, India. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in India, then through your continued use of the Services, you are transferring your data to and expressly consenting to have your data processed in India. Further, we do not knowingly accept, request, or solicit information from children or knowingly market to children.</p>
            
            <p><strong>US SPECIFIC:</strong> Therefore, in accordance with the U.S. Children's Online Privacy Protection Act, if we receive actual knowledge that anyone under the age of 13 has provided personal information to us without the requisite and verifiable parental consent, we will delete that information from the Services as quickly as is reasonably practical.</p>
          </section>

          <section id="term-termination" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">12. TERM AND TERMINATION</h2>
            <p className="mb-4">These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.</p>
            
            <p>If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.</p>
          </section>

          <section id="modifications-interruptions" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">13. MODIFICATIONS AND INTERRUPTIONS</h2>
            <p className="mb-4">We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.</p>
            
            <p>We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.</p>
          </section>

          <section id="governing-law" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">14. GOVERNING LAW</h2>
            <p>These Legal Terms shall be governed by and defined following the laws of India. Voqalize Technologies Pvt Ltd and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.</p>
          </section>

          <section id="dispute-resolution" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">15. DISPUTE RESOLUTION</h2>
            
            <div id="informal-negotiations" className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">15.1. Informal Negotiations</h3>
              <p>To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms (each a "Dispute" and collectively, the "Disputes") brought by either you or us (individually, a "Party" and collectively, the "Parties"), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.</p>
            </div>

            <div id="binding-arbitration" className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">15.2. Binding Arbitration</h3>
              <p>Any dispute arising out of or in connection with these Legal Terms, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by the International Commercial Arbitration Court under the European Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146) according to the Rules of this ICAC, which, as a result of referring to it, is considered as the part of this clause. The number of arbitrators shall be three (3). The seat, or legal place, or arbitration shall be Bengaluru, India. The language of the proceedings shall be English. The governing law of these Legal Terms shall be substantive law of India.</p>
            </div>

            <div id="restrictions" className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">15.3. Restrictions</h3>
              <p>The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.</p>
            </div>

            <div id="exceptions-arbitration" className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">15.4. Exceptions to Informal Negotiations and Arbitration</h3>
              <p>The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.</p>
            </div>
          </section>

          <section id="corrections" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">16. CORRECTIONS</h2>
            <p>There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.</p>
          </section>

          <section id="disclaimer" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">17. DISCLAIMER</h2>
            <p>The services are provided on an as-is and as-available basis. you agree that your use of the services will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the services and your use thereof, including, without limitation, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We make no warranties or representations about the accuracy or completeness of the services' content or the content of any websites or mobile applications linked to the services and we will assume no liability or responsibility for any (1) errors, mistakes, or inaccuracies of content and materials, (2) personal injury or property damage, of any nature whatsoever, resulting from your access to and use of the services, (3) any unauthorized access to or use of our secure servers and/or any and all personal information and/or financial information stored therein, (4) any interruption or cessation of transmission to or from the services, (5) any bugs, viruses, trojan horses, or the like which may be transmitted to or through the services by any third party, and/or (6) any errors or omissions in any content and materials or for any loss or damage of any kind incurred as a result of the use of any content posted, transmitted, or otherwise made available via the services. We do not warrant, endorse, guarantee, or assume responsibility for any product or service advertised or offered by a third party through the services, any hyperlinked website, or any website or mobile application featured in any banner or other advertising, and we will not be a party to or in any way be responsible for monitoring any transaction between you and any third-party providers of products or services. as with the purchase of a product or service through any medium or in any environment, you should use your best judgment and exercise caution where appropriate.</p>
          </section>

          <section id="limitations-liability" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">18. LIMITATIONS OF LIABILITY</h2>
            <p>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the services, even if we have been advised of the possibility of such damages. Notwithstanding anything to the contrary contained herein, our liability to you for any cause whatsoever and regardless of the form of the action, will at all times be limited to the amount paid, if any, by you to us during the three (3) month period prior to any cause of action arising. Certain US state laws and international laws do not allow limitations on implied warranties or the exclusion or limitation of certain damages. if these laws apply to you, some or all of the above disclaimers or limitations may not apply to you, and you may have additional rights.</p>
          </section>

          <section id="indemnification" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">19. INDEMNIFICATION</h2>
            <p>You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: (1) your Contributions; (2) use of the Services; (3) breach of these Legal Terms; (4) any breach of your representations and warranties set forth in these Legal Terms; (5) your violation of the rights of a third party, including but not limited to intellectual property rights; or (6) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.</p>
          </section>

          <section id="user-data" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">20. USER DATA</h2>
            <p>We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.</p>
          </section>

          <section id="user-rights" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">21. USER RIGHTS & PREFERENCES AS DATA SUBJECT</h2>
            <p className="mb-4">Subject to the GDPR and applicable law's limitations, the rights afforded to you as a data subject are:</p>
            <ul className="mb-4 pl-6 space-y-2">
              <li><strong>RIGHT TO BE INFORMED:</strong> You have a right to be informed about the manner in which any of your personal data is collected or used which we have endeavored to do by way of this Policy.</li>
              <li><strong>RIGHT OF ACCESS:</strong> You have a right to access the personal data you have provided by requesting us to provide you with the same.</li>
              <li><strong>RIGHT TO RECTIFICATION:</strong> You have a right to request us to amend or update your personal data if it is inaccurate or incomplete.</li>
              <li><strong>RIGHT TO ERASURE:</strong> You have a right to request us to delete your personal data.</li>
              <li><strong>RIGHT TO RESTRICT:</strong> You have a right to request us to temporarily or permanently stop processing all or some of your personal data.</li>
              <li><strong>RIGHT TO OBJECT:</strong> You have a right, at any time, to object to our processing of your personal data under certain circumstances. You have an absolute right to object to us processing your personal data for the purposes of direct marketing.</li>
              <li><strong>RIGHT TO DATA PORTABILITY:</strong> You have a right to request us to provide you with a copy of your personal data in electronic format and you can transmit that personal data for using another third-party's product/service.</li>
              <li><strong>RIGHT NOT TO BE SUBJECT TO AUTOMATED DECISION-MAKING:</strong> You have a right to not be subject to a decision based solely on automated decision making, including profiling.</li>
            </ul>
            <p className="mb-4">The data provided by you as a Visitor, or when you sign up as a Customer / User or register for our Services will be processed by us for the purpose of rendering Services to you or in order to take steps prior to rendering such Services, at your request. Where such data is not being used by us to render Services to you, we shall explicitly seek your consent for using the same. You can choose to withdraw this consent at any time here.</p>
            
            <p className="mb-4">Additionally, we may process your data to serve legitimate interests.</p>
            <p className="mb-4">Accordingly, the grounds on which we can engage in processing are as follows:</p>
            
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-left font-semibold">NATURE OF DATA</th>
                    <th className="border border-border p-3 text-left font-semibold">GROUNDS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">Visitor Data</td>
                    <td className="border border-border p-3">Consent; Performance of a Contract; and Legitimate Interest</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Account Registration Data</td>
                    <td className="border border-border p-3">Performance of a Contract; and Legitimate Interest</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Service Usage Data</td>
                    <td className="border border-border p-3">Compliance with applicable laws; Legitimate Interest</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Data for Marketing our Services</td>
                    <td className="border border-border p-3">Performance of a Contract; and Legitimate Interest</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="mb-4">If you believe we have used your personal data in violation of the rights above or have not responded to your objections, you may lodge a complaint with your local supervisory authority.</p>
            
            <p className="mb-4">Additionally, please note:</p>
            <ul className="mb-4 pl-6 space-y-2">
              <li>If you are a Customer/User using one of our Services to collect data about an EU data subject from third parties, it shall be your sole obligation to inform such data subject about the source of such data; and</li>
              <li>We do not collect any Special Categories of Personal Data. Further, if you are a Customer/User, you hereby agree and acknowledge that you shall not, under any circumstances, whether directly or indirectly, use our Services to collect or process Special Categories of Personal Data or transfer to us any such data.</li>
            </ul>
            <p>The term "Special Categories of Personal Data" shall have the meaning ascribed to it under the GDPR and shall include, without limitation, data pertaining to a data subject's race, ethnic origin, genetics, political affiliations, biometrics, health or sexual orientation.</p>
          </section>

          <section id="electronic-communications" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">22. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h2>
            <p>Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the services, satisfy any legal requirement that such communication be in writing. You hereby agree to the use of electronic signatures, contracts, orders, and other records, and to electronic delivery of notices, policies, and records of transactions initiated or completed by us or via the services. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.</p>
          </section>

          <section id="miscellaneous" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">23. MISCELLANEOUS</h2>
            <p className="mb-4">These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.</p>
            
            <p><strong>REMOVAL OF USER AND USER-GENERATED CONTRIBUTION</strong></p>
            <p>If you are found to be using abusive, foul language then we reserve the right to remove you as a user, bar you from further accessing / blacklist from the site and all content generated by you.</p>
          </section>

          <section id="consent-video-audio" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">24. CONSENT OF USE OF VIDEO / AUDIO / ENTIRE INTERVIEW MATERIAL FOR PROCESSING</h2>
            <p>By taking an interview from our site, you give us consent to process your entire interview - audio, video, screen, inputs from associated devices, transcripts for analysis and improve our services. This data will also be shared with our clients who have contracted us to use the platform for their hiring purposes.</p>
          </section>

          <section id="interview-processing" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">25. INTERVIEW PROCESSING FOR ADDITIONAL OPPORTUNITIES</h2>
            <p>We understand that the primary reason you're giving the interview is to apply for a specific position. If your profile and interview are suitable for a similar position, we reserve the right to circulate your candidature to another employer.</p>
          </section>

          <section id="ai-provisions" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">26. ADDITIONAL PROVISIONS FOR AI-DRIVEN INTERVIEW PROCESSING AND DATA SECURITY</h2>
            
            <div id="ai-decision-support" className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">26.1. AI-Driven Decision Support Disclaimer</h3>
              <p>The AI Recruit Agent provided through the Services is designed to assist in the interview process by analyzing candidate data and generating recommendations. These outputs are provided for informational purposes only and are not intended to serve as the sole basis for any hiring decision. Organizations should exercise independent human judgment and consider multiple factors in their decision-making process.</p>
            </div>

            <div id="data-security-breach" className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">26.2. Data Security and Breach Protocols</h3>
              <p>We implement industry-standard security measures to safeguard the confidentiality, integrity, and availability of all interview-related data and personal information. In the event of a data breach, we will adhere to applicable laws and our internal breach notification procedures, including timely notification to affected users and relevant regulatory authorities, as required by law.</p>
            </div>

            <div id="algorithmic-transparency" className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">26.3. Algorithmic Transparency and Non-Discrimination</h3>
              <p>We are committed to maintaining fairness in our AI-driven processes. While we continually work to minimize any potential biases in our algorithms, we do not warrant that the AI system is entirely free from errors or bias. We regularly review and update our systems to ensure transparency, fairness, and compliance with applicable anti-discrimination laws.</p>
            </div>
          </section>

          <section id="contact-us" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">27. CONTACT US</h2>
            <p className="mb-4">In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:</p>
            
            <div className="bg-card p-6 rounded-lg border">
              <p className="mb-2"><strong>Voqalize Technologies Pvt Ltd</strong></p>
              <p className="mb-2">No. L, 367, 5th Main Rd, Sector 6, HSR Layout,</p>
              <p className="mb-2">Bengaluru, Karnataka 560102</p>
              <p className="mb-2">India</p>
              <p>Email: <a href="mailto:contact@recruit41.com" className="text-primary hover:underline">contact@recruit41.com</a></p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;