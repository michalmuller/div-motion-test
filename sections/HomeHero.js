import tw from 'twin.macro'
import Link from 'next/link'

// Atoms, Components  & Sections
import Title from '../atoms/Title'
import Button from '../atoms/Button'

// Images
import heroHome from '../public/images/hero-home.svg'

const Wrapper = tw.div`px-5 bg-blue-900`
const Container = tw.div`container mx-auto text-white` 


export default function HeroHome() {
  return (    
    <Wrapper>
      <Container className='container'>        
        <div css={tw`flex flex-col sm:flex-row justify-between pt-16 xl:pt-32 2xl:pt-40 pb-16 xl:pb-24 2xl:pb-32 items-center`}>
          <div css={tw`w-full sm:w-1/2 2xl:pr-24 xl:pr-28`}>
            <Title tag="h1" theme="white">
              Turning bright ideas into brilliant software
            </Title>
            <p css={tw`xl:text-lg 2xl:text-xl text-gray-500 mt-5 xl:mt-8 2xl:mt-10 leading-relaxed font-light`}>DIV Motion provides professional software services for companies of all sizes - all the way from newly born starts-ups to big enterprises realize their digital potential.</p>
            <Link  href="/services">
              <a css={tw`block pt-8`}>                
                <Button isPrimary>Learn More</Button>
              </a>
            </Link>
          </div>
          <img css={tw`w-full sm:w-1/2 mt-16 sm:mt-0 xl:pl-24 2xl:pl-12`} src={heroHome.src} alt="todo"/>
        </div>
      </Container>
    </Wrapper>
  )
}

