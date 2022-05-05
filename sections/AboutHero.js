import tw from 'twin.macro'
import Image from 'next/image'
import Link from 'next/link'

// Atoms, Components  & Sections
import Title from '../atoms/Title'
import Button from '../atoms/Button'

// Images
import aboutHero from '../public/images/hero-about.png'

const Wrapper = tw.div`px-5 bg-blue-900`
const Container = tw.div`container mx-auto text-white` 


export default function AboutHero() {
  return (    
    <Wrapper>
      <Container className='container'>        
        <div css={tw`flex justify-between pt-48`}>
          <div css={tw`w-1/2 pb-44`}>
            <Title tag="h1" theme="white">
            We Help Enterprises with Digital Transformation
            </Title>
            <p css={tw`text-xl text-gray-500 mt-10 leading-relaxed font-light`}>
              DIV Motion helps companies with agile development services and IT consulting. Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet adipiscing elit.
            </p>  
            <Link  href="/services">
              <a css={tw`block pt-8`}>                
                <Button isPrimary>Learn More</Button>
              </a>
            </Link>
          </div>
          <div css={tw`w-1/2  relative`}>
            <div css={tw`absolute w-max left-0 bottom-[-6px] ml-20 `}>
              <Image  src={aboutHero} alt="todo"/>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

