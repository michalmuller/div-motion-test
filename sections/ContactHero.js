import tw from 'twin.macro'
import Image from 'next/image'
import Link from 'next/link'

// Atoms, Components  & Sections
import Title from '../atoms/Title'
import TitleSpan from '../atoms/TitleSpan'

// Images
import aboutHero from '../public/images/hero-about.png'

const Wrapper = tw.div`px-5`
const Container = tw.div`container mx-auto text-white` 


export default function ContactHero() {
  return (    
    <Wrapper>
      <Container>        
        <div css={tw`flex justify-between pt-48`}>
          <div css={tw`w-5/12 pb-44`}>
            <Title tag="h1" regular>
              Let's Modernize Your Business 
              <TitleSpan after="t" styles={tw`after:right-[-22px] after:bottom-[12px] after:w-[21px] after:h-[12px]` }> Together</TitleSpan>
            </Title>
            <p css={tw`text-xl text-gray-700 mt-10  font-light`}>
              Feel free to reach out with any question and perhaps there's a way your business could benefit by partnering with us.
              <br/> <br/>
              We are always open to new project inquiries, consultation or possible collaboration. 
            </p>  
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

