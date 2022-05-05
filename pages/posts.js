import Head from 'next/head'
import tw from 'twin.macro'
import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { getAllPostIds, getSortedPostsData } from '../lib/posts'

// Atoms, Components  & Sections
import Title from '../atoms/Title'
import TitleSpan from '../atoms/TitleSpan'
import BlogPost from '../components/blog-post'

// SEO METADATA
const siteTitle = 'Blog | Div Motion'
const siteDescription = 'Site description for SEO'

// STYLED COMPONENTS
const Wrapper = tw.div`px-5`
const Container = tw.div`container mx-auto text-white mt-40` 

export default function Posts({ allPostsData }) {

  // const firstPost = posts[0]
  // const remainingPosts = posts.slice(1)
  return (
    <Layout home>
      <Head>
      <title>{siteTitle}</title>
        <meta name="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta name="description" content={siteDescription} />
      </Head>
      <Wrapper>
        <Container>
          <Title after={true} regular={true} tag="h1">Latest  
            <TitleSpan after="s" styles={tw`after:right-[-24px] after:bottom-[4px] after:w-[24px] after:h-[22px]` }> Articles</TitleSpan>
          </Title>
          {/* SPACE FOR THE FIRST/LATEST BLOG POST */}
          <div css={tw`mt-11 flex items-center`}>
          <Link href={`/posts/${allPostsData[0].name}`}>
            <div css={tw`w-1/2 h-80 overflow-hidden hover:cursor-pointer hover:scale-105`}>
              <Image src={allPostsData[0].image} className="scale105" alt="todo" width="620px" height="340px" />              
            </div>
          </Link> 
            <div css={tw`w-1/2 text-blue-900 ml-12`}>
              <p css={tw`text-brand-turquoise uppercase font-bold pb-4`}>{allPostsData[0].label}</p>
              <Link href={`/posts/${allPostsData[0].name}`}>
                <div css={tw`hover:cursor-pointer`}>
                  <Title tag="h3">{allPostsData[0].title}</Title>
                </div>   
              </Link>
              <p css={tw`pt-5`}>{allPostsData[0].summary}</p>
            </div>
          </div>
          <div css={tw`grid grid-cols-3 gap-x-8 gap-y-24 w-full my-32`}>   
            {allPostsData.slice(1).map(({ id, image, label, title, name }) => (
              <div key={id}>
                <BlogPost id={id} image={image} label={label} title={title} name={name} />
              </div>
            ))}
          </div>
        </Container>
      </Wrapper>    
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
