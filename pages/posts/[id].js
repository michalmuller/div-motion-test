import Layout from '../../components/Layout'
import { getAllPostIds, getPostData, getSortedPostsData } from '../../lib/posts'
import Head from 'next/head'
import Link from 'next/link'
import Title from '../../atoms/Title'
import TitleSpan from '../../atoms/TitleSpan'
import Image from 'next/image'
import tw, { styled } from 'twin.macro'
import BlogPost from '../../components/blog-post'

const Container = tw.div`container mx-auto`

const Content = styled.div`
  ${tw`text-blue-900 `},
  h1{
    ${tw`text-4xl leading-snug pb-6 font-normal`}
  }
  h2{
    ${tw`text-3xl leading-snug pb-5 pt-11 font-normal`}
  }
  h3{
    ${tw`text-2xl leading-snug pb-5 pt-11 font-normal`}
  }
  blockquote {
    ${tw`italic mt-6 mb-12 pt-9 pb-4 relative px-10`}
    &:before {
      ${tw`absolute left-0 top-0 w-full h-px block content-[' '] bg-gradient-to-r from-gray-200/30 via-gray-200 to-gray-200/10`}
    }
    &:after {
      ${tw`absolute left-0 bottom-0 w-full h-px block content-[' '] bg-gradient-to-r from-gray-200/30 via-gray-200 to-gray-200/10`}
    }
    p{
      ${tw`relative`}
      &:after{
        ${tw`absolute left-0 top-0 w-[28px] h-[17px] block content-[' '] -ml-10 -mt-3`}
        background-image: url('../images/blockquote.svg');
      }
    }
  }
  p{
    ${tw`font-light text-xl pb-6`}
  }
  ul{
    ${tw`font-normal`}
  }
  li{
    ${tw`pb-3 relative flex items-center text-xl font-normal`}
  }

  li:before {
    ${tw`mr-3 w-3.5 h-[18px] block content-[' '] `}
    background-image: url('../images/li-slash.svg');
  }

  a{
    ${tw`text-brand-purple font-medium hover:underline`}
  }
  img{
    ${tw`w-full h-full pt-6 pb-12`}
  }
`

export default function Post({ postData, allPostsData }) {

  const RelatedPostsArray = [];

  allPostsData.map(post => {
    if (post.id === postData.id && post.related != null){
      post.related.forEach(element => {
        allPostsData.map(postId => {
        if (element === postId.id){
          RelatedPostsArray.push(postId);
        }
        })
      });
    }
  }
);

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
              <TitleSpan after="e" styles={tw`after:bottom-[26px] after:w-[24px] after:h-[22px]` }>{postData.title}</TitleSpan>
            </Title>
          </div>
          <div css={tw`flex justify-center pb-16 pt-16`}>
            <Image src={postData.image} alt="todo" width="1240px" height="456px" />
          </div>

          <div css={tw`flex self-start h-5/6 w-11/12 pb-28`}>
            <div css={tw`sticky top-0 w-full h-11`}>
                <Link href="/" >
                  <a>← Back to home</a>
                </Link>
            </div>
            <Content>
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </Content> 
          </div>
        </Container>

        {allPostsData[postData.id].related != undefined &&
          <div css={tw`pt-28 pb-28 bg-gray-50`}>
            <div>
              <Title tag="h2" align={'center'}>
                <TitleSpan before="w" styles={tw`after:left-[-26px] after:bottom-[10px] after:w-[27px] after:h-[12px]` }>
                  Related
                </TitleSpan> Articles
              </Title> 
            </div>  
            <Container>
              <div css={tw`grid grid-cols-3 gap-x-8 gap-y-24 w-full`}>   
              {RelatedPostsArray.map(({ id, image, label, title, name }) => (
                <div key={id}>
                  <BlogPost id={id} image={image} label={label} title={title} name={name} />
                </div>
              ))}
              </div> 
            </Container>    
          </div>
        }
        {console.log(allPostsData)}
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
  const allPostsData = getSortedPostsData()
  return {
    props: {
      postData,
      allPostsData
    }
  }
}