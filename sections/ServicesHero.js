import tw from 'twin.macro'
import Image from 'next/image'
import Link from 'next/link'

// Atoms, Components  & Sections
import Title from '../atoms/Title'

// Images
import heroRight from '../public/images/services-hero-right.svg'
import heroLeft from '../public/images/services-hero-left.svg'
import heroBottom from '../public/images/services-hero-bottom.svg'

const Wrapper = tw.div`px-5 bg-blue-900`
const Container = tw.div`container mx-auto text-white xl:pt-32 2xl:pt-48 pb-14 relative` 


export default function ServicesHero() {
  return (    
    <Wrapper>
      <Container className='container'>        
        <div css={tw`w-full flex flex-col justify-center items-center`}>
          <Title tag="h1" theme="white" align="center">
            The Building Blocks of <br css={tw`hidden lg:block`}/> Our Development Services
          </Title>
          <p css={tw`xl:text-lg 2xl:text-xl text-gray-500 xl:mt-8 2xl:mt-10 leading-relaxed font-light text-center xl:max-w-[640px] 2xl:max-w-[720px]`}>
            Are you looking for digital services that can improve customer experience, business efficiency, innovation, and increase profits through digital solutions, check the services that DIV Motion offers.
          </p> 
          <img src={heroBottom.src} css={tw`mt-6 max-h-56 2xl:max-h-full`} alt="div motion building block"/> 
        </div>
        <img src={heroRight.src} css={tw`absolute right-0 xl:top-[38%] 2xl:top-[43%] max-h-32 2xl:max-h-full`} alt="div motion building block"/> 
        <img src={heroLeft.src} css={tw`absolute left-0 xl:top-[50%] 2xl:top-[55%] max-h-32 2xl:max-h-full`} alt="div motion building block"/> 
      </Container>
    </Wrapper>
  )
}

