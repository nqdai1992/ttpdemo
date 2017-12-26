<template>
  <blog-thumbnail :blogs="blogs"></blog-thumbnail>
</template>

<script>
import BlogThumbnail from '@/components/BlogThumbnail'
export default {
    components: {
      BlogThumbnail
    },
    data () {
      return {
        blogs: [
          {title: 'Altai Technologies Unveils Low Cost Pocket Size High Performance Super WiFi USB Client to Increase WiFi Signal to Indoor Users', link: '#', content: `The Altai U1 USB Client Extends WiFi Signal to 4km from Altai Super WiFi Base Station Hong Kong, Sept 8, 2011 – Altai Technologies, a carrier-grade Super WiFi equipment supplier today unveiled its low cost, pocket size and high performance Altai U1 Super WiFi USB Client, the latest addition to its Super WiFi solution. The Altai U1 is 802.11n capable and is designed as an essential component in the Altai Super WiFi system to extend outdoor WiFi coverage to indoor areas for broadband connectivity.
  The Altai U1 employs patented smart signal processing algorithms and antenna design to increase WiFi signal strength as well as the client's throughput in areas covered by the A8 series Super WiFi Base Station or A2 series Super WiFi Access Point. With powerful built-in antennas, the Altai U1 can be used to improve the link budget as much as 15 dB.

  Key features of the Altai U1 include:.....`},
          {title: 'Psions Workabout Pro Earns Apriva Certification for Secure Government Communications', link: '#', content: `Company's Rugged Handheld Passes Apriva's Integration and Certification Testing for Government Agency Mobile Devices
  CINCINNATI, OHIO and SCOTTSDALE, AZ - (September 13, 2011) Psion (LSE: PON.L), a global provider of mobile computing solutions, and Apriva, the leading provider of end-to-end wireless transaction and secure mobile communications solutions, today announced that the Psion Workabout Pro™ 3 and Workabout Pro-g have earned Apriva's compatibility certification. Running on Windows Mobile 6.1, the Workabout Pro 3 and Workabout Pro-g have completed Apriva's integration and testing with its secure mobile communications products deployed to government and public agencies around the world.
  ....`},
          {title: 'ZEBRA TECHNOLOGIES’ WIRELESS LAN SOLUTION MAKES TWOGETHER CREATIVE STAFF MORE PRODUCTIVE',
          link: '#', content: `SPEEDY WIRELESS NETWORK ENABLES MARKETING CREATIVES TO WORK WITHOUT INTERRUPTION
  BOURNE END, United Kingdom – July 14, 2015 – Twogether Creative Ltd, a technology marketing agency, has installed Zebra Technologies Corporation’s (NASDAQ: ZBRA) WiNG Express  solution throughout its office to improve the wireless experience for its staff and remove hassle from their working day with fast, reliable wireless connectivity. 80 Twogether employees are happier and 10 – 15% more productive than before....`}
        ]
      }
    }
  }
</script>
