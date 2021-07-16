export const data = {
  slug: 'landing-best-cbd-product',
  site: 'hl',
  layout: 'landingPage',
  title: 'CBD Product Grid',
  components: [
    {
      name: 'Modal',
      tagularLocation: 'Header',
      tagularPosition: 'CBD Advertorial Content LP',
      tagularElementType: 'BUTTON',
      tagularText: 'Sponsered by our partners',
      tagularActionOutcome: 'internallink',
      triggerText: 'Content created by Healthline and sponsored by our partners.',
      content: '<h3>This is sponsored content.</h3><p>Healthline may collect a share of sales or other compensation from the links on this page. Prices and other terms and conditions are accurate as of time of publication.</p><p>This content is intended for marketing purposes and does not adhere to Healthline\'s editorial and medical standards. Nor does it constitute an endorsement by Healthline Media of any products or services.</p><p>Your <a href="https://www.healthline.com/privacy-settings" target="_blank">privacy</a> is important to us.</p>'
    },
    {
      name: 'Hero',
      image: '/images/hero-cannabis-cyan.png',
      text1: 'Best CBD products of 2021',
      text2: 'To save you time in your search for the right CBD product for you, we\'ve compiled a list of top gummies, oils, and capsules.',
    },
    {
      name: 'StandoutCollapsible',
      tagularLocation: 'SECTION',
      tagularPosition: 'CBD Advertorial Content LP',
      tagularElementType: 'BUTTON',
      tagularText: 'What is CBD',
      tagularActionOutcome: 'internallink',
      triggerText: 'What is CBD?',
      icon: '/icons/icon-plus.svg',
      iconAlt: '/icons/icon-minus.svg',
      content: '<p><a href="#" target="_blank">Cannabidiol (CBD)</a> is one of the chemical compounds found in cannabis plants. It\'s derived from the hemp plant — a cousin to the marijuana plant — but is nonintoxicating, so it won\'t get you "high." Experts are still researching the effects and potential benefits of CBD*, but many products show a range of promising potential health benefits.</p><p>Not all CBD products are made equal. <a href="#" target="_blank">We\'ve vetted the products</a> on this list based on safety, quality, and transparency.</p>'
    },
    {
      name: 'Tabs',
      tabs: [
        {
          id: 'general',
          tagularLocation: 'SECTION',
          tagularPosition: 'CBD Advertorial Content LP',
          tagularName: 'NAVIGATION',
          tagularElementType: 'BUTTON',
          tagularText: 'General',
          icon: '/icons/icon-cannabist.svg',
          body: {
            overviewTitle: 'CBD for general use',
            overviewContent: '<p>Some CBD products may be able to promote overall wellness. Topicals, gummies, oils, and capsules can help soothe skin irritation, reduce inflammation to manage arthritis, promote relaxation for better sleep, and more.</p><p><strong>Check out our CBD product picks for general use.</strong></p>',
            overviewPricingTitle: 'Pricing',
            overviewPricingKey: [
              {
                content: '<strong>$</strong> = under $50',
              },
              {
                content: '<strong>$$</strong> = $50–$75',
              },
              {
                content: '<strong>$$$</strong> = over $75',
              },
            ],
            products: [
              {
                name: 'Charlotte\'s Web Starter Bundle',
                tagularName: 'CBD Advertorial Content LP',
                tagularLocation: 'CARD',
                tagularFormatType: 'BUTTON',
                logo: '/images/products/cbd-charlotte-web-starter-bundle.png',
                buttonCTA: 'Shop Now',
                link: 'https://activation.healthline.com/api/member-offers/5024/redirect?lp=328&tc=120226&subid2=+where&subid=charlottesweb_hl_generaladvcontent_cbd_5603',
                badge: 'Use code "HEALTH15" for 15% off',
                price: '$$$',
                list: [
                  {
                    icon: '/icons/icon-box.svg',
                    text: 'Includes an oil tincture, a hemp extract roll-on, and gummies for recovery and sleep',
                  },
                  {
                    icon: '/icons/icon-droplet.svg',
                    text: 'Gummies and oil contain 10 to 50 mg of full-spectrum CBD per serving',
                  },
                  {
                    icon: '/icons/icon-sleep.svg',
                    text: 'Certain products contain melatonin to promote healthy sleep cycles and essential oils',
                  },
                ],
                collapsible: {
                  triggerText: 'Read More',
                  content: '<p><strong>What is full-spectrum CBD?</strong></p><p>Full-spectrum CBD contains all the cannabinoids naturally found in the cannabis plant, including trace amounts of tetrahydrocannabinol (THC). Based on the 2018 Hemp Farm Bill of 2018, CBD products with less than 0.3% THC, such as Charlotte\'s Web, are federally legal.</p><p>A Certificate of Analysis (COA) ensures that a CBD product has been properly tested by a third party. View the <a href="https://www.charlottesweb.com/batch-reports?utm_source=RevOffers&offer_id=72&publisher_id=1605&transaction_id=102ef7451ec3e20cf1360ef6df7e1e" target="_blank">COA</a> from Charlotte\'s Web.</p>',
                  tagularPosition: 'CBD Advertorial Content LP',
                },
              },
              {
                name: 'FABCBD CBD Oil',
                tagularName: 'CBD Advertorial Content LP',
                tagularLocation: 'CARD',
                tagularFormatType: 'BUTTON',
                logo: '/images/products/cbd-fabcbd-oil.png',
                buttonCTA: 'Shop Now',
                link: 'https://activation.healthline.com/api/member-offers/5025/redirect?lp=328&tc=120226&subid2=+where&subid=fabcbd_hl_generaladvcontent_cbd_5604',
                badge: 'Use code "HEALTHLINE" for 20% off your first purchase',
                price: '$–$$$',
                list: [
                  {
                    icon: '/icons/icon-oil-dropper.svg',
                    text: 'Includes 60 0.5 mL servings and oil tincture',
                  },
                  {
                    icon: '/icons/icon-droplet.svg',
                    text: '5 to 40 mg of full-spectrum CBD per serving, depending on the strength',
                  },
                  {
                    icon: '/icons/icon-shapes.svg',
                    text: 'Comes in a choice of berry, citrus, mint, natural, and vanilla flavors',
                  },
                ],
                collapsible: {
                  triggerText: 'Read More',
                  content: '<p><strong>What is full-spectrum CBD?</strong></p><p>Full-spectrum CBD contains all the cannabinoids naturally found in the cannabis plant, including trace amounts of tetrahydrocannabinol (THC). Based on the 2018 Hemp Farm Bill of 2018, CBD products with less than 0.3% THC, such as FAB CBD, are federally legal.</p><p>A Certificate of Analysis (COA) ensures that a CBD product has been properly tested by a third party. View the <a href="https://fabcbd.com/lab-reports?rfsn=3963205.1367fe&subid=100436855" target="_blank">COA</a> FAB CBD.</p>',
                },
                tagularName: 'CBD Advertorial Content LP',
                tagularLocation: 'CARD',
                tagularBrand: '',
                tagularFormatType: 'BUTTON',
                tagularText: 'SHOP NOW'
              },
              {
                name: 'CBDfx CBD Starter Kit',
                tagularName: 'CBD Advertorial Content LP',
                tagularLocation: 'CARD',
                tagularFormatType: 'BUTTON',
                logo: '/images/products/cbd-cbdfx-starter-kit.png',
                buttonCTA: 'Shop Now',
                link: 'https://activation.healthline.com/api/member-offers/5026/redirect?lp=328&tc=120226&subid2=+where&subid=cbdfx_hl_generaladvcontent_cbd_5605',
                badge: 'Use code "HEALTH15" for 15% off',
                price: '$$$',
                list: [
                  {
                    icon: '/icons/icon-box.svg',
                    text: 'Includes capsules, gummies, pain cream, and an enhanced cannabinoid-blend oil tincture',
                  },
                  {
                    icon: '/icons/icon-droplet.svg',
                    text: 'Contains both full- and broad-spectrum CBD products, ranging from 25 to 500 mg of CBD per serving',
                  },
                  {
                    icon: '/icons/icon-superfood.svg',
                    text: 'Gummies include superfoods turmeric and spirulina to promote overall wellness',
                  },
                ],
                collapsible: {
                  triggerText: 'Read More',
                  content: '<p><strong>What is broad-spectrum CBD?</strong></p><p>Broad-spectrum CBD contains most cannabinoids naturally found in cannabis, but it generally doesn’t include tetrahydrocannabinol (THC).</p><br><p><strong>What is full-spectrum CBD?</strong></p><p>Full-spectrum CBD contains all the cannabinoids naturally found in the cannabis plant, including trace amounts of tetrahydrocannabinol (THC). Based on the 2018 Hemp Farm Bill of 2018, CBD products with less than 0.3% THC, such as CBDfx, are federally legal.</p><p>A Certificate of Analysis (COA) ensures that a CBD product has been properly tested by a third party. View the <a href="https://cbdfx.com/lab-reports/?utm_source=RevOffers&offer_id=37&publisher_id=1605&transaction_id=1025e4d77f752967d1195a15e8e106" target="_blank">COA</a> from CBDfx.</p>'
                },
                tagularName: '',
              },
              {
                name: 'Medterra CBD Gummies',
                tagularName: 'CBD Advertorial Content LP',
                tagularLocation: 'CARD',
                tagularFormatType: 'BUTTON',
                logo: '/images/products/cbd-medterra-gummies.png',
                buttonCTA: 'Shop Now',
                link: 'https://activation.healthline.com/api/member-offers/5027/redirect?lp=328&tc=120226&subid2=+where&subid=medterra_hl_generaladvcontent_cbd_5606',
                badge: 'Use code "HEALTH15" for 15% off',
                price: '$',
                list: [
                  {
                    icon: '/icons/icon-gummies.svg',
                    text: 'Specialized virtual therapy for LGBTQ+ communities ',
                  },
                  {
                    icon: '/icons/icon-droplet.svg',
                    text: 'Sessions take place via phone and video calls, messaging, and live chat',
                  },
                  {
                    icon: '/icons/icon-shapes.svg',
                    text: 'Costs range from $40 to $70 per week billed monthly',
                  },
                ],
                collapsible: {
                  triggerText: 'Read More',
                  content: '<p><strong>What is CBD isolate?</p></strong><p>Isolate products are pure CBD, with no other cannabinoids or tetrahydrocannabinol (THC).</p><p>A Certificate of Analysis (COA) ensures that a CBD product has been properly tested by a third party. View the <a href="https://medterracbd.com/certificates-of-analysis" target="_blank">COA</a> from Medterra.</p>',
                },
                tagularName: '',
              },
              {
                name: 'NuLeaf Full-Spectrum CBD Capsules',
                tagularName: 'CBD Advertorial Content LP',
                tagularLocation: 'CARD',
                tagularFormatType: 'BUTTON',
                logo: '/images/products/cbd-nuleaf-full-spectrum-capsules.png',
                buttonCTA: 'Shop Now',
                link: 'https://activation.healthline.com/api/member-offers/5028/redirect?lp=328&tc=120226&subid2=+where&subid=nuleaf_hl_generaladvcontent_cbd_5607',
                badge: 'Use code "HEALTHLINE" for 20% off',
                price: '$-$$$',
                list: [
                  {
                    icon: '/icons/icon-soft-gel-pill.svg',
                    text: 'Available in various sizes, starting at 300 mg per 20-count container',
                  },
                  {
                    icon: '/icons/icon-droplet.svg',
                    text: '30 mg of full-spectrum CBD per serving',
                  },
                  {
                    icon: '/icons/icon-superfood.svg',
                    text: 'Vegan capsules derived from cassava root extract with no added fillers',
                  },
                ],
                collapsible: {
                  triggerText: 'Read More',
                  content: '<p><strong>What is full-spectrum CBD?</strong></p><p>Full-spectrum CBD contains all the cannabinoids naturally found in the cannabis plant, including trace amounts of tetrahydrocannabinol (THC). Based on the 2018 Hemp Farm Bill of 2018, CBD products with less than 0.3% THC, such as NuLeaf, are federally legal.</p><p>A certificate of analysis (COA) ensures that a CBD product has been properly tested by a third party. View the <a href="https://act.healthline.com/confirm_linkout_redirect.aspx?o=1979&lp=328&g=4&link=1&tc=120288&subid=NuLeafNaturals_CBDcoa_link_1582&subid2=/health/best-cbd-oil&correlationId=342e807d-09e0-4113-954f-37433840dfab" target="_blank">COA</a> from NuLeaf.</p>',
                },
                tagularName: '',
              },
            ],
          }
        },
        {
          id: 'sleep',
          tagularLocation: 'SECTION',
          tagularPosition: 'CBD Advertorial Content LP',
          tagularName: 'NAVIGATION',
          tagularElementType: 'BUTTON',
          tagularText: 'Sleep',
          icon: '/icons/icon-moon.svg',
          body: {
            overviewTitle: 'CBD for sleep',
            overviewContent: '<p>Some CBD products may be able to help you get a good night’s sleep. Whether it’s gummies with added melatonin or an oil tincture, certain products can help calm your mind and promote relaxation so you can spend less time tossing and turning.</p><p><strong>Check out our CBD product picks for sleep.</strong></p>',
            overviewPricingTitle: 'Pricing',
            overviewPricingKey: [
              {
                content: '<strong>$</strong> = under $50',
              },
              {
                content: '<strong>$$</strong> = $50–$75',
              },
              {
                content: '<strong>$$$</strong> = over $75',
              },
            ],
            products: [
              {
                name: 'Charlotte\'s Web Deep Sleep Bundle',
                tagularName: 'CBD Advertorial Content LP',
                tagularLocation: 'CARD',
                tagularFormatType: 'BUTTON',
                logo: '/images/products/cbd-sleep-charlotte-web-deep-bundle.png',
                buttonCTA: 'Shop Now',
                link: 'https://activation.healthline.com/api/member-offers/5134/redirect?lp=328&tc=120226&subid2=+where&subid=charlottesweb_hl_sleepadvcontent_cbd_5772',
                badge: 'Use code "HEALTH15" for 15% off',
                price: '$$',
                list: [
                  {
                    icon: '/icons/icon-box.svg',
                    text: 'Includes both CBD gummies and oil tincture',
                  },
                  {
                    icon: '/icons/icon-droplet.svg',
                    text: '5 to 7 mg of full-spectrum CBD per serving of each product',
                  },
                  {
                    icon: '/icons/icon-sleep.svg',
                    text: 'Contains melatonin to help you get to sleep and maintain healthy sleep cycles',
                  },
                ],
                collapsible: {
                  triggerText: 'Read More',
                  content: '<p><strong>What is full-spectrum CBD?</strong></p><p>Full-spectrum CBD contains all the cannabinoids naturally found in the cannabis plant, including trace amounts of tetrahydrocannabinol (THC). Based on the 2018 Hemp Farm Bill of 2018, CBD products with less than 0.3% THC, such as Charlotte\'s Web, are federally legal.</p><p>A certificate of analysis (COA) ensures that a CBD product has been properly tested by a third party. View the <a href="https://www.charlottesweb.com/batch-reports?utm_source=RevOffers&offer_id=72&publisher_id=1605&transaction_id=102ef7451ec3e20cf1360ef6df7e1e" target="_blank">COA</a> from Charlotte\'s Web.</p>',
                },
              },
              {
                name: 'CBDfx CBD Gummies with Melatonin for Sleep',
                tagularName: 'CBD Advertorial Content LP',
                tagularLocation: 'CARD',
                tagularFormatType: 'BUTTON',
                logo: '/images/products/cbd-sleep-cbdfx-gummies-melatonin.png',
                buttonCTA: 'Shop Now',
                link: 'https://activation.healthline.com/api/member-offers/4757/redirect?lp=328&tc=120226&subid2=+where&subid=cbdfx_hl_sleepavdcontent_cbd_5594',
                badge: 'Use code "HEALTH15" for 15% off',
                price: '$',
                list: [
                  {
                    icon: '/icons/icon-gummies.svg',
                    text: 'Each 60-count bottle provides a 1-month supply',
                  },
                  {
                    icon: '/icons/icon-droplet.svg',
                    text: '50 mg of broad-spectrum CBD per serving',
                  },
                  {
                    icon: '/icons/icon-sleep.svg',
                    text: 'Contains melatonin to help you fall asleep and magnesium to promote relaxation',
                  },
                ],
                collapsible: {
                  triggerText: 'Read More',
                  content: '<p><strong>What is broad-spectrum CBD?</strong></p><p>Broad-spectrum CBD contains most cannabinoids naturally found in cannabis, but it generally doesn\'t include tetrahydrocannabinol (THC).</p><p>A certificate of analysis (COA) ensures that a CBD product has been properly tested by a third party. View the <a href="https://cbdfx.com/lab-reports/melatonin-hemp-gummies/" target="_blank">COA</a> from CBDfx.</p>',
                },
                tagularName: '',
              },
              {
                name: 'CBDistillery Sleep Starter Pack',
                tagularName: 'CBD Advertorial Content LP',
                tagularLocation: 'CARD',
                tagularFormatType: 'BUTTON',
                logo: '/images/products/cbd-sleep-cbdistillery-starter-pack.png',
                buttonCTA: 'Shop Now',
                link: 'https://activation.healthline.com/api/member-offers/4941/redirect?lp=328&tc=120226&subid2=+where&subid=cbdistillery_hl_sleepadvcontent_cbd_5595',
                badge: 'Use code "HEALTHLINE" for 15% off sitewide',
                price: '$$$',
                list: [
                  {
                    icon: '/icons/icon-box.svg',
                    text: 'Includes both CBD gummies and oil tincture',
                  },
                  {
                    icon: '/icons/icon-droplet.svg',
                    text: '30 mg of broad-spectrum CBD per gummy, while tincture offers 15 mg of full-spectrum CBD per serving',
                  },
                  {
                    icon: '/icons/icon-sleep.svg',
                    text: 'Gummies include melatonin and oil contains cannabinol (CBN) to help you sleep through the night',
                  },
                ],
                collapsible: {
                  triggerText: 'Read More',
                  content: '<p><strong>What is broad-spectrum CBD?</strong></p><p>Broad-spectrum CBD contains most cannabinoids naturally found in cannabis, but it generally doesn\'t include tetrahydrocannabinol (THC).</p><p>A certificate of analysis (COA) ensures that a CBD product has been properly tested by a third party. You can find the COA overview in the product\'s image slideshow on the <a href="https://www.thecbdistillery.com/product/sleep-starter-pack-sleep-gummies-1-3-cbn-cbd-sleep-tincture-150mg-cbn-450mg-cbd/" target="_blank">website</a>.</p><br><p><strong>What is full-spectrum CBD?</strong></p><p>A certificate of analysis (COA) ensures that a CBD product has been properly tested by a third party. You can find the COA overview in the product\'s image slideshow on the CBDistillery <a href="https://www.thecbdistillery.com/product/sleep-starter-pack-sleep-gummies-1-3-cbn-cbd-sleep-tincture-150mg-cbn-450mg-cbd/" target="_blank">website</a>.</p>',
                },
                tagularName: '',
              },
              {
                name: 'Medterra Good Night Liposomal CBD+ Capsules',
                tagularName: 'CBD Advertorial Content LP',
                tagularLocation: 'CARD',
                tagularFormatType: 'BUTTON',
                logo: '/images/products/cbd-sleep-medterra-liposomal-caps.png',
                buttonCTA: 'Shop Now',
                link: 'https://activation.healthline.com/api/member-offers/5014/redirect?lp=328&tc=120226&subid2=+where&subid=medterra_hl_sleepadvcontent_cbd_5596',
                badge: 'Use code "HEALTH15" for 15% off',
                price: '$$',
                list: [
                  {
                    icon: '/icons/icon-soft-gel-pill.svg',
                    text: 'Each 30-count bottle provides a 1-month supply',
                  },
                  {
                    icon: '/icons/icon-droplet.svg',
                    text: '25 mg of CBD isolate per serving',
                  },
                  {
                    icon: '/icons/icon-sleep.svg',
                    text: 'Capsules contain melatonin, chamomile, passionflower, and gamma aminobutyric acid (GABA) to promote sound sleep',
                  },
                ],
                collapsible: {
                  triggerText: 'Read More',
                  content: '<p><strong>What is CBD isolate?</strong></p><p>Isolate products are pure CBD, with no other cannabinoids or tetrahydrocannabinol (THC).</p><p>A certificate of analysis (COA) ensures that a CBD product has been properly tested by a third party. View the <a href="https://medterracbd.com/coa-cbd-liposomal-melatonin-25" target="_blank"> COA</a> from Medterra.</p>',
                },
                tagularName: '',
              },
              {
                name: 'FAB CBD PM Chews',
                tagularName: 'CBD Advertorial Content LP',
                tagularLocation: 'CARD',
                tagularFormatType: 'BUTTON',
                logo: '/images/products/cbd-sleep-fab-chews.png',
                buttonCTA: 'Shop Now',
                link: 'https://activation.healthline.com/api/member-offers/5016/redirect?lp=328&tc=120226&subid2=+where&subid=fabcbd_hl_sleepadvcontent_cbd_5597',
                badge: 'Use code "HEALTHLINE" for 20% off your first purchase',
                price: '$$$',
                list: [
                  {
                    icon: '/icons/icon-gummies.svg',
                    text: 'Each 60-count bottle provides up to a 2-months supply',
                  },
                  {
                    icon: '/icons/icon-droplet.svg',
                    text: '12.5 mg of broad-spectrum CBD per chew',
                  },
                  {
                    icon: '/icons/icon-sleep.svg',
                    text: 'Gummies are acai-flavored and include amino acids, ashwagandha, and melatonin to enhance sleep',
                  },
                ],
                collapsible: {
                  triggerText: 'Read More',
                  content: '<p><strong>What is broad-spectrum CBD?</strong></p><p>Broad-spectrum CBD contains most cannabinoids naturally found in cannabis, but it generally doesn\'t include tetrahydrocannabinol (THC).</p><p>A certificate of analysis (COA) ensures that a CBD product has been properly tested by a third party. View the <a href="https://fabcbd.com/lab-reports?rfsn=3963205.1367fe&subid=100516397" target="_blank">COA</a> from FAB CBD.</p>',
                },
                tagularName: '',
              },
            ],
          }
        },
        {
          id: 'anxiety',
          tagularLocation: 'SECTION',
          tagularPosition: 'CBD Advertorial Content LP',
          tagularName: 'NAVIGATION',
          tagularElementType: 'BUTTON',
          tagularText: 'Anxiety',
          icon: '/icons/icon-brain.svg',
          body: {
            overviewTitle: 'CBD for anxiety:',
            overviewContent: '<p>Certain CBD products may help you manage anxiety or provide stress relief. Some people may choose to take a fruit-flavored gummy for a sweet way to destress as situations arise, while others may decide to work CBD herbal drops into their daily routine.</p><p><strong>Check out our CBD product picks for anxiety and stress relief.</strong></p>',
            overviewPricingTitle: 'Pricing',
            overviewPricingKey: [
              {
                content: '<strong>$</strong> = under $50',
              },
              {
                content: '<strong>$$</strong> = $50–$75',
              },
              {
                content: '<strong>$$$</strong> = over $75',
              },
            ],
            products: [
              {
                name: 'Charlotte\'s Web THC Free CBD Oil',
                tagularName: 'CBD Advertorial Content LP',
                tagularLocation: 'CARD',
                tagularFormatType: 'BUTTON',
                logo: '/images/products/cbd-anxiety-charlotte-web-thc-free-oil.png',
                buttonCTA: 'Shop Now',
                link: 'https://activation.healthline.com/api/member-offers/5019/redirect?lp=328&tc=120226&subid2=+where&subid=charlottesweb_hl_anxietyadvcontent_cbd_5598',
                badge: 'Use code "HEALTH15" for 15% off',
                price: '$$',
                list: [
                  {
                    icon: '/icons/icon-oil-dropper.svg',
                    text: 'Each 30-mL bottle provides a 1-month supply',
                  },
                  {
                    icon: '/icons/icon-droplet.svg',
                    text: '25 mg of broad-spectrum CBD per serving',
                  },
                  {
                    icon: '/icons/icon-sleep.svg',
                    text: 'Mint chocolate flavor, naturally sweetened with monk fruit',
                  },
                ],
                collapsible: {
                  triggerText: 'Read More',
                  content: '<p><strong>What is broad-spectrum CBD?</strong></p><p>Broad-spectrum CBD includes a range of cannabinoids naturally derived from whole hemp plants, with tetrahydrocannabinol (THC) removed. That being said, broad-spectrum Charlotte\'s Web products still may contain less than 0.01% THC.</p><p>A certificate of analysis (COA) ensures that a CBD product has been properly tested by a third party. View the <a href="https://www.charlottesweb.com/batch-reports?utm_source=RevOffers&offer_id=72&publisher_id=1605&transaction_id=102ef7451ec3e20cf1360ef6df7e1e" target="_blank">COA</a> from Charlotte\'s Web.</p>',
                },
              },
              {
                name: 'CBDfx CBD + CBN Oil Calming Tincture',
                tagularName: 'CBD Advertorial Content LP',
                tagularLocation: 'CARD',
                tagularFormatType: 'BUTTON',
                logo: '/images/products/cbd-anxiety-cbdfx-tinctures-calming.png',
                buttonCTA: 'Shop Now',
                link: 'https://activation.healthline.com/api/member-offers/5020/redirect?lp=328&tc=120226&subid2=+where&subid=cbdfx_hl_anxietyadvcontent_cbd_5599',
                badge: 'Use code "HEALTHLINE" for 15% off',
                price: '$-$$$',
                list: [
                  {
                    icon: '/icons/icon-oil-dropper.svg',
                    text: '30-mL bottle provides a 1-month supply, and the 60-mL bottle provides a 2-month supply',
                  },
                  {
                    icon: '/icons/icon-droplet.svg',
                    text: 'Available in regular strength (500 mg) up to ultra strength (6,000 mg)',
                  },
                  {
                    icon: '/icons/icon-relax.svg',
                    text: 'Includes cannabinol (CBN) oil helps to enhance relaxation and unwind the mind',
                  },
                ],
                collapsible: {
                  triggerText: 'Read More',
                  content: '<p><strong>What is full-spectrum CBD?</strong></p><p>Full-spectrum CBD contains all the cannabinoids naturally found in the cannabis plant, including trace amounts of tetrahydrocannabinol (THC). Based on the 2018 Hemp Farm Bill of 2018, CBD products with less than 0.3% THC, such as CBDfx, are federally legal.</p><p>A certificate of analysis (COA) ensures that a CBD product has been properly tested by a third party. View the <a href="https://cbdfx.com/lab-reports/?utm_source=RevOffers&offer_id=37&publisher_id=1605&transaction_id=102d98931609f4a73b63218852cf9b" target="_blank">COA</a> from CBDfx.</p>',
                },
                tagularName: '',
              },
              {
                name: 'CBDistillery Broad Spectrum CBD Softgels',
                tagularName: 'CBD Advertorial Content LP',
                tagularLocation: 'CARD',
                tagularFormatType: 'BUTTON',
                logo: '/images/products/cbd-anxiety-cbdistillery-broad-spectrum-softgels.png',
                buttonCTA: 'Shop Now',
                link: 'https://activation.healthline.com/api/member-offers/5021/redirect?lp=328&tc=120226&subid2=+where&subid=cbdistillery_hl_anxietyadvcontent_cbd_5600',
                badge: 'Use code "HEALTHLINE" for 15% off',
                price: '$$$',
                list: [
                  {
                    icon: '/icons/icon-soft-gel-pill.svg',
                    text: 'Each 30-count bottle provides a 1-month supply',
                  },
                  {
                    icon: '/icons/icon-droplet.svg',
                    text: '30 mg of broad-spectrum CBD per softgel',
                  },
                  {
                    icon: '/icons/icon-calorie-counter.svg',
                    text: 'Pre-measured in a once-daily supplement for easy use',
                  },
                ],
                collapsible: {
                  triggerText: 'Read More',
                  content: '<p><strong>What is broad-spectrum CBD?</strong></p><p>Broad-spectrum CBD includes a range of cannabinoids naturally derived from whole hemp plants, with tetrahydrocannabinol (THC) removed. That being said, broad-spectrum CBDistillery products still may contain less than 0.05% THC.</p><p>A certificate of analysis (COA) ensures that a CBD product has been properly tested by a third party. You can find the COA overview in the product\'s image slideshow on the <a href="https://www.thecbdistillery.com/product/30mg-broad-spectrum-cbd-softgels-30-count/" target="_blank">website</a>.</p>',
                },
                tagularName: '',
              },
              {
                name: 'FAB CBD CBD Chews, Anytime',
                tagularName: 'CBD Advertorial Content LP',
                tagularLocation: 'CARD',
                tagularFormatType: 'BUTTON',
                logo: '/images/products/cbd-anxiety-fab-chews-anytime.png',
                buttonCTA: 'Shop Now',
                link: 'https://activation.healthline.com/api/member-offers/5022/redirect?lp=328&tc=120226&subid2=+where&subid=fabcbd_hl_anxietyadvcontent_cbd_5601',
                badge: 'Use code "HEALTHLINE" for 20% off your first purchase',
                price: '$$',
                list: [
                  {
                    icon: '/icons/icon-gummies.svg',
                    text: 'Each 30-count bottle provides a 1-month supply',
                  },
                  {
                    icon: '/icons/icon-droplet.svg',
                    text: '25 mg of CBD isolate per gummy',
                  },
                  {
                    icon: '/icons/icon-superfood.svg',
                    text: 'Vegan, gluten-free, and naturally fruit-flavored, without harmful additives',
                  },
                ],
                collapsible: {
                  triggerText: 'Read More',
                  content: '<p><strong>What is CBD isolate?</strong></p><p>Isolate products are pure CBD, with no other cannabinoids or tetrahydrocannabinol (THC).</p><p>A certificate of analysis (COA) ensures that a CBD product has been properly tested by a third party. View the <a href="https://fabcbd.com/lab-reports?rfsn=3963205.1367fe&subid=100457868" target="_blank">COA</a> from FAB CBD.</p>',
                },
                tagularName: '',
              },
              {
                name: 'NuLeaf Full Spectrum CBD Oil',
                tagularName: 'CBD Advertorial Content LP',
                tagularLocation: 'CARD',
                tagularFormatType: 'BUTTON',
                logo: '/images/products/cbd-anxiety-nuleaf.png',
                buttonCTA: 'Shop Now',
                link: 'https://activation.healthline.com/api/member-offers/5023/redirect?lp=328&tc=120226&subid2=+where&subid=nuleaf_hl_anxietyadvcontent_cbd_5602',
                badge: 'Use code "HEALTHLINE" for 20% off',
                price: '$-$$$',
                list: [
                  {
                    icon: '/icons/icon-oil-dropper.svg',
                    text: 'Available in various sizes, starting at 300 mg per 5 mL container',
                  },
                  {
                    icon: '/icons/icon-droplet.svg',
                    text: '30 mg of full-spectrum CBD per serving',
                  },
                  {
                    icon: '/icons/icon-superfood.svg',
                    text: 'CBD derived from CO2 extraction for a more potent blend without added chemicals',
                  },
                ],
                collapsible: {
                  triggerText: 'Read More',
                  content: '<p><strong>What is full-spectrum CBD?</strong></p><p>Full-spectrum CBD contains all the cannabinoids naturally found in the cannabis plant, including trace amounts of tetrahydrocannabinol (THC). Based on the 2018 Hemp Farm Bill of 2018, CBD products with less than 0.3% THC, such as NuLeaf, are federally legal.</p><p>A certificate of analysis (COA) ensures that a CBD product has been properly tested by a third party. View the <a href="https://nuleafnaturals.com/lab-test-results/" target="_blank">COA</a> from NuLeaf Naturals.</p>',
                },
                tagularName: '',
              },
            ],
          }
        },
      ]
    },
    {
      name: 'Disclaimer',
      header: 'Keep in mind',
      content: 'The Food and Drug Administration (FDA) does not currently regulate over-the-counter (OTC) CBD products. You should not use CBD products to treat conditions, though their potential benefits may help manage symptoms.\n\nAny OTC products, including CBD, can interact with other medications. Be sure to consult with a doctor before trying CBD.\n\nIndividual states have legislation regarding legal levels of CBD and THC. Check your state’s legislation for specific information, and be mindful of other state laws when traveling with CBD.'
    },
    {
      name: 'Scroll',
      content: 'SCROLL TO TOP',
    },
  ],
};
