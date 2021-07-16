export const data = {
  slug: 'landing-best-online-therapy',
  site: 'hl',
  layout: 'landingPage',
  title: 'Best Online Therapy',
  components: [
    {
      name: 'Modal',
      triggerText: 'Content created by Healthline and sponsored by our partners.',
      content: '<h3>This is sponsored content.</h3><p>Healthline may collect a share of sales or other compensation from the links on this page. Prices and other terms and conditions are accurate as of time of publication.</p><p>This content is intended for marketing purposes and does not adhere to Healthline\'s editorial and medical standards. Nor does it constitute an endorsement by Healthline Media of any products or services.</p><p>Your <a href="https://www.healthline.com/privacy-settings" target="_blank">privacy</a> is important to us.</p>',
      tagularLocation: 'mentalhealthonlinetherapypaidsearch',
      tagularText: 'partner disclaimer',
      tagularActionOutcome: 'internallink',
    },
    {
      name: 'Hero',
      image: '/images/hero-clouds-cyan.png',
      text1: 'Best Online Therapy',
      text2: 'Explore our top picks for the best online therapy services.',
    },
    {
      name: 'Standout',
      content: "<p><strong>Keep in mind:</strong> Use of online therapy isn't a substitute for emergency services. In the event of a mental health emergency — if you're thinking about harming yourself or someone else — call the <a href='https://suicidepreventionlifeline.org/' target='_blank'>National Suicide Prevention Lifeline</a> at 800-273-8255, call 911, or seek emergency medical attention.</p>",
    },
    {
      name: 'Products',
      tagularLocation: 'mentalhealthonlinetherapypaidsearch',
      tagularActionOutcome: 'internallink',
      products: [
        {
          name: 'BetterHelp',
          logo: '/logos/betterhelp.png',
          buttonCTA: 'Try Betterhelp',
          link: 'https://activation.healthline.com/api/member-offers/2168/redirect?lp=328&tc=120226&subid=betterhelp_hl_paidsearch_5570&subid2=+where',
          subtitle: 'Largest network of licensed counselors',
          badge: 'Get 10% off your first month',
          list: [
            {
              icon: '/icons/icon-globe.svg',
              text: 'Online care for individuals, partners, and families',
            },
            {
              icon: '/icons/icon-phone.svg',
              text:
                'Sessions take place via phone and video calls, messaging, and live chat',
            },
            {
              icon: '/icons/icon-dollar.svg',
              text: 'Costs range from $40 to $70 per week, billed monthly',
            },
          ],
          collapsible: {
            triggerText: 'Learn More',
            content: '<p><strong>How It Works</strong></p><p>BetterHelp matches you with a therapist based on your care needs and session preferences. If you’re not happy with your match, switch therapists anytime to ensure you receive the best experience for you.</p><br><p><strong>Insurance</strong></p><p>BetterHelp services are not covered by most health insurance plans, but financial aid is available for those who qualify.</p>',
          },
          tagularName: 'Try BetterHelp',
        },
        {
          name: 'ReGain',
          logo: '/logos/regain.png',
          buttonCTA: 'Try ReGain',
          link: 'https://activation.healthline.com/api/member-offers/2170/redirect?lp=328&tc=120226&subid2=+where&subid=betterhelp_hl_regain_paidsearch_5571',
          subtitle: 'Best online therapy for couples',
          badge: 'Get 10% off your first month ',
          list: [
            {
              icon: '/icons/icon-membership-card.svg',
              text:
                'Virtual care for individuals and partner(s) from accredited relationship counselors',
            },
            {
              icon: '/icons/icon-monitor.svg',
              text:
                'Sessions take place via live sessions with you and your partner(s)',
            },
            {
              icon: '/icons/icon-dollar.svg',
              text: 'Costs range from $40 to $70 per week billed monthly',
            },
          ],
          collapsible: {
            triggerText: 'Learn More',
            content: '<p><strong>How It Works</strong></p><p>Get started with a short quiz about the type of support your relationship needs. Then, ReGain will match you with a therapist to provide personalized care for you and your partner(s). You’ll share an account with your partner(s) and be able to attend sessions together. Switch therapists or stop therapy at any time if you’re unhappy with your experience.</p><br><p><strong>Insurance</strong></p><p>ReGain services are not covered by most health insurance plans.</p>',
          },
          tagularName: 'Try ReGain',
        },
        {
          name: 'Teen Counseling',
          logo: '/logos/teen-counseling.png',
          buttonCTA: 'Try Teen Counseling',
          link: 'https://activation.healthline.com/api/member-offers/2171/redirect?lp=328&tc=120226&subid2=+where&subid=betterhelp_hl_teencounseling_paidsearch_5573',
          subtitle: 'Best online therapy for teens',
          badge: 'Get 10% off your first month',
          list: [
            {
              icon: '/icons/icon-globe.svg',
              text: 'Online counseling geared toward ages 13 to 19',
            },
            {
              icon: '/icons/icon-phone.svg',
              text: 'Sessions take place via phone and video calls, messaging, and live chat',
            },
            {
              icon: '/icons/icon-dollar.svg',
              text: 'Costs range from $40 to $70 per week billed monthly',
            },
          ],
          collapsible: {
            triggerText: 'Learn More',
            content: '<p><strong>How It Works</strong></p><p>Get started with a short quiz your teen can complete alone or with your help. Your teen will be matched with a licensed therapist based on their personalized goals and therapy preferences. Sessions are held individually between your teen and their counselor, but parents will be notified of any thoughts or behaviors observed that are considered harmful. Switch therapists at any time if you or your teen are unhappy with their care.</p><br><p><strong>Insurance</strong></p><p>Teen Counseling services are not covered by most health insurance plans.</p>',
          },
          tagularName: 'Try Teen Counseling',
        },
        {
          name: 'Pride Counseling',
          logo: '/logos/pride-counseling.png',
          buttonCTA: 'Try Pride Counseling',
          link: 'https://activation.healthline.com/api/member-offers/2169/redirect?lp=328&tc=120226&subid2=+where&subid=betterhelp_hl_pridecounseling_paidsearch_5572',
          subtitle: 'Best online therapy for LGBTQ+ communities',
          badge: 'Get 10% off your first month',
          list: [
            {
              icon: '/icons/icon-human.svg',
              text: 'Specialized virtual therapy for LGBTQ+ communities ',
            },
            {
              icon: '/icons/icon-phone.svg',
              text: 'Sessions take place via phone and video calls, messaging, and live chat',
            },
            {
              icon: '/icons/icon-dollar.svg',
              text: 'Costs range from $40 to $70 per week billed monthly',
            },
          ],
          collapsible: {
            triggerText: 'Learn More',
            content: '<p><strong>How It Works</strong></p><p>Start by taking a short quiz that covers your objectives and session preferences. Then, get matched with a therapist who’ll provide you with personalized care. Pride Counseling therapists are specialized in addressing the needs of LGBTQ+ communities.</p><br><p><strong>Insurance</strong></p><p>Counseling services are not covered by most health insurance plans.</p>',
          },
          tagularName: 'Try Pride Counseling',
        },
        {
          name: 'Talkspace',
          logo: '/logos/talk-space.png',
          buttonCTA: 'Try Talkspace',
          link: 'https://activation.healthline.com/api/member-offers/1756/redirect?lp=328&tc=120226&subid2=+where&subid=talkspace_hl_paidsearch_5575',
          subtitle: 'Best overall online therapy',
          badge: 'Get $65 off your first month with code APPLY65',
          list: [
            {
              icon: '/icons/icon-human.svg',
              text: 'Specialized care for individuals, couples, and teens',
            },
            {
              icon: '/icons/icon-monitor.svg',
              text: 'Sessions take place on live video calls or 24/7 messaging',
            },
            {
              icon: '/icons/icon-dollar.svg',
              text: 'Costs range from $65 to $99 per week billed monthly',
            },
          ],
          collapsible: {
            triggerText: 'Learn More',
            content: '<p><strong>How It Works</strong></p><p>Complete a short online assessment to get matched with a therapist. Then, choose a payment plan that fits your budget and needs. Once you connect with a therapist, you can chat with them online using your browser or your app. You have the flexibility to switch therapists or stop therapy at any time.</p><br><p><strong>Insurance</strong></p><p>If your employee assistance program offers mental health benefits, then you may be eligible for coverage. Check with your employer.</p>',
          },
          tagularName: 'Try Talkspace',
        },
        {
          name: 'Online-Therapy.com',
          logo: '/logos/online-therapy.png',
          buttonCTA: 'Try Online-Therapy.com',
          link: ' https://activation.healthline.com/api/member-offers/4756/redirect?lp=328&tc=120226&subid2=+where&subid=onlinetherapy_hl_paidsearch_5574',
          subtitle: 'Best online therapy for cognitive behavioral therapy (CBT)',
          badge: 'Get 20% off your first month',
          list: [
            {
              icon: '/icons/icon-human.svg',
              text: 'Specialized care for people seeking CBT methods',
            },
            {
              icon: '/icons/icon-phone.svg',
              text:
                'Sessions take place weekly through video chats, phone calls, or live sessions',
            },
            {
              icon: '/icons/icon-dollar.svg',
              text: 'Costs range from $32 to $64 per week billed monthly',
            },
          ],
          collapsible: {
            triggerText: 'Learn More',
            content: '<p><strong>How It Works</strong></p><p>Start by answering a few questions to get matched with a therapist. Then, choose a plan that fits your budget. Once you’re signed up, you’ll get access to a program with hands-on tools, worksheets, weekly therapy sessions, and more. You can switch therapists at any time.</p><br><p><strong>Insurance</strong></p><p>Online-Therapy.com does not accept insurance. But you may be able to request reimbursement from your insurance company. Check with your insurance company about coverage.</p>',
          },
          tagularName: 'Try Online-Therapy.com',
        },
      ],
    },
    {
      name: 'Scroll',
      content: 'SCROLL TO TOP'
    }
  ],
};
