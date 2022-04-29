import Head from 'next/head'
import Layout from '../components/Layout'

//SECTIONS
import AboutHero from '../sections/AboutHero'
import AboutMetrics from '../sections/AboutMetrics'

// SEO META TAGS
const siteTitle = 'About | Div Motion'
const siteDescription = 'Site description for SEO'

export default function About() {
  return (
    <Layout dark>
      <Head>
        <title>{siteTitle}</title>
        <meta name="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta name="description" content={siteDescription} />
      </Head>
      <AboutHero/>
      <AboutMetrics/>
    </Layout>
  )
}
