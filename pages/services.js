import Head from 'next/head'
import Layout from '../components/Layout'

//SECTIONS
import ServicesHero from '../sections/ServicesHero'
import ServicesIntroduction from '../sections/ServicesIntroduction'
import ServicesList from '../sections/ServicesList'
import ServicesMain from '../sections/ServicesMain'
import ServicesCTA from '../sections/ServicesCTA'

const siteTitle = 'Services | Div Motion'
const siteDescription = 'Site description for SEO'


export default function Services() {
  return (
    <Layout dark>
      <Head>
        <title>{siteTitle}</title>
        <meta name="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta name="description" content={siteDescription} />
      </Head>
      <ServicesHero/>
      <ServicesIntroduction/>
      <ServicesList/>
      <ServicesMain/>
      <ServicesCTA />
    </Layout>
  )
}
