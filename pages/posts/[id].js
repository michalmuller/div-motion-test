import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Link from 'next/link'
import Title from '../../atoms/Title'
import TitleSpan from '../../atoms/TitleSpan'
import Image from 'next/image'
import tw, { styled } from 'twin.macro'

const Container = tw.div`container mx-auto text-blue-900`

const Content = styled.div`
  ${tw`text-blue-900 `},
  h1{
    ${tw`text-4xl leading-snug pb-6 font-normal`}
  }
  h2{
    ${tw`text-3xl leading-snug pb-6 font-normal`}
  }
  h3{
    
  }
  blockquote {
    ${tw`bg-gray-50`}
  }
  p{
    ${tw`text-xl`}
  }
  ul{
    
  }
`


export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <Container>
        <div css={tw`flex justify-center pb-3 pt-40`}>
            <p css={tw`text-brand-turquoise uppercase font-bold text-base`}>{postData.label}</p>
        </div>
        <div css={tw`flex justify-center text-center`}>
          <Title tag="h1" theme="black" >
            <TitleSpan after="e" styles={tw`after:right-[-24px] after:bottom-[26px] after:w-[24px] after:h-[22px]` }>{postData.title}</TitleSpan>
          </Title>
        </div>
        <div css={tw`flex justify-center pb-16 pt-16`}>
          <Image src={postData.image} alt="todo" width="1240px" height="456px" />
        </div>
        <div css={tw`grid grid-cols-5`}>
          <div css={tw`relative`}>
            <div css={tw`sticky top-0`}>
              <Link href="/" >
                <a>← Back to home</a>
              </Link>
            </div>
          </div>
          <Content css={tw`col-span-3`}>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </Content> 
        </div>
      </Container>

    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
