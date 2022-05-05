import Head from 'next/head'
import tw, {styled} from 'twin.macro'
import Link from 'next/link'
import { useRouter } from 'next/router';

//images
import Logo from '../atoms/Logo'
import IconLinkedin from '../atoms/IconLinkedin'

const Wrapper = styled.div(({ dark }) => [
  tw`px-5`,
  dark && tw`bg-blue-900`
])

const Container = tw.div`container mx-auto`

const Navigation = tw.div`flex justify-between py-6 sm:pb-0 sm:pt-12` 

const Links = styled.div(({ dark }) => [
  tw`hidden sm:block cursor-pointer text-gray-700`,
  dark && tw`text-gray-500`, 
])

const TextLink = styled.a`
  ${tw`font-normal text-lg ml-12 relative`}
  ${({ active, dark }) => active && dark ? tw`text-gray-100 font-medium` :``}
  ${({ active, dark }) => active && !dark ? tw`text-gray-900 font-medium` :``}
  ${({ active }) => active ? 
  `&:after {
    width: 16px;
    height: 16px;
    bottom: -9px;
    right:-12px;
    background-image: url('../images/quarter-ellipse.svg');
    position: absolute;
    content: "";
  }`
  :``}
  
`

export default function Layout({ children, dark }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/jfo7xun.css"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content="meta image"
        />
      </Head>
      <Wrapper dark={dark}>
        <Container className='container'>
          <Navigation>
            <Link href="/">
              <a css={[
                tw`flex text-blue-900 cursor-pointer`, 
                dark && tw`text-gray-100`, 
              ]}>                
                <Logo/>
              </a>
            </Link>
            <Links dark={dark}>
              <Link href="/" >
                <TextLink active={router.pathname == "/"} dark={dark}>Home</TextLink>
              </Link>
              <Link href="/services">
                <TextLink active={router.pathname == "/services"} dark={dark}>Our Services</TextLink>
              </Link>
              <Link href="/about">
                <TextLink active={router.pathname == "/about"} dark={dark}>About us</TextLink>
              </Link>
              <Link href="/posts">
                <TextLink active={router.pathname == "/posts"} dark={dark}>Blog</TextLink>
              </Link>
              <Link href="/contact">
                <TextLink active={router.pathname == "/contact"} dark={dark}>Contact</TextLink>
              </Link>
            </Links>
          </Navigation>
        </Container>
      </Wrapper>
      <main>{children}</main>
      <Wrapper dark={true}>
        <Container className='container'>
          <div css={tw`flex justify-between py-16`}>
            <div css={tw`w-1/3 pr-2`}>
              <Link href="/">
                <a css={tw`flex text-gray-100 cursor-pointer w-40`}>                
                  <Logo />
                </a>
              </Link>
              <p css={tw`2xl:text-lg text-gray-500 mt-3 leading-relaxed font-light`}>div motion is a digital agency helping companies with agile development services and IT consulting. </p>
              <Link href="/">
                <a css={tw`flex text-gray-500/40 hover:text-gray-500/60 cursor-pointer mt-6`}>                
                  Privacy Policy
                </a>
              </Link>
            </div>
            <div css={tw`w-5/12 flex`}>
              <div css={tw`w-7/12 flex-row`}>
                <p css={tw`text-gray-100 font-normal tracking-wide text-xl pb-4`}>Useful Links</p>
                <Link href="/services">
                  <a css={tw`text-gray-500 hover:text-gray-300 text-lg mb-2 block cursor-pointer`}>Our Services</a>
                </Link>
                <Link href="/about">
                  <a css={tw`text-gray-500 hover:text-gray-300 text-lg mb-2 block cursor-pointer`}>About us</a>
                </Link>
                <Link href="/contact">
                  <a css={tw`text-gray-500 hover:text-gray-300 text-lg mb-2 block cursor-pointer`}>Contact</a>
                </Link>
              </div>
              <div css={tw`w-5/12 flex-row`}>
                <p css={tw`text-gray-100 font-normal tracking-wide text-xl pb-4`}>Follow Us</p>
                <div css={tw`flex`}>
                  <div css={tw`opacity-80 hover:opacity-100 transition-all  mr-3`}>
                    <a href='https://www.linkedin.com/company/divmotion/' target="_blank" css={tw`text-blue-700`}>
                      <IconLinkedin/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
      </Wrapper>
    </div>
  )
}
