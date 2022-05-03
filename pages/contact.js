import Head from 'next/head'
import Layout from '../components/Layout'

import ContactHero from '../sections/ContactHero'
import ContactFAQ from '../sections/ContactFAQ'
import ContactCTA from '../sections/ContactCTA'

const siteTitle = 'Contact | Div Motion'
const siteDescription = 'Site description for SEO'

export default function Contact() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta name="description" content={siteDescription} />
      </Head>
      <ContactHero/>
      <ContactFAQ/>
      <ContactCTA/>
    </Layout>
  )
}
