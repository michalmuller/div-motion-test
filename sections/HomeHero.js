import tw from 'twin.macro'
import Image from 'next/image'
import Link from 'next/link'

// Atoms, Components  & Sections
import Title from '../atoms/Title'
import Button from '../atoms/Button'

// Images
import heroHome from '../public/images/hero-home.svg'

const Wrapper = tw.div`px-5 bg-blue-900 `
const Container = tw.div`container mx-auto text-white` 


export default function HeroHome() {
  return (    
    <Wrapper>
      <Container>        
        <div css={tw`flex justify-between pt-40 pb-32 items-center`}>
          <div css={tw`w-1/2 pr-20`}>
            <Title tag="h1" theme="white">
              Turning bright ideas into brilliant software
            </Title>
            <p css={tw`text-xl text-gray-500 mt-10 leading-relaxed font-light`}>DIV Motion provides professional software services for companies of all sizes - all the way from newly born starts-ups to big enterprises realize their digital potential.</p>
            <Link  href="/services">
              <a css={tw`block pt-8`}>                
                <Button isPrimary>Learn More</Button>
              </a>
            </Link>
          </div>
          <Image src={heroHome} alt="todo"/>
        </div>
      </Container>
    </Wrapper>
  )
}

