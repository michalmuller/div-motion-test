import Head from 'next/head'
import Layout from '../components/Layout'

//SECTIONS
import HomeHero from '../sections/HomeHero'
import HomeServiceSlider from '../sections/HomeServiceSlider'
import HomeTestimonial from '../sections/HomeTestimonial'
import HomeValues from '../sections/HomeValues'
import HomeWhatWeDo from '../sections/HomeWhatWeDo'
import HomeHowWeStart from '../sections/HomeHowWeStart'
import HomeHowWeWork from '../sections/HomeHowWeWork'
import HomeGetConsultation from '../sections/HomeGetConsultation'
import HomeContact from '../sections/HomeContact'

// SEO META TAGS
const siteTitle = 'Div Motion'
const siteDescription = 'Site description for SEO'

export default function Home() {
  return (
    <Layout dark>
      <Head>
        <title>{siteTitle}</title>
        <meta name="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta name="description" content={siteDescription} />
      </Head>
      <HomeHero/>
      <HomeServiceSlider/>
      <HomeValues/>
      <HomeTestimonial/>
      <HomeWhatWeDo/>
      <HomeHowWeStart/>
      <HomeHowWeWork/>
      <HomeGetConsultation/>
      <HomeContact/>
    </Layout>
  )
}

