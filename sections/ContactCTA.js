import tw from 'twin.macro'
import Link from 'next/link'

// Atoms, Components  & Sections
import Title from '../atoms/Title'
import TitleSpan from '../atoms/TitleSpan'
import Button from '../atoms/Button'

const Wrapper = tw.div`px-5`
const Container = tw.div`container flex justify-center mx-auto text-white py-32 relative` 


export default function ContactCTA() {
  return (    
    <Wrapper>
      <Container>        
        <div css={tw`w-full flex flex-col items-center max-w-xl`}>
          <Title tag="h2" align="center">
            <TitleSpan before="g" styles={tw`after:left-[-22px] after:bottom-[6px] after:w-[24px] after:h-[22px]` }>Get </TitleSpan>
            a Better Understanding of What We Offer
          </Title>
          <Link  href="/services">
            <a css={tw`block pt-8`}>                
              <Button isPrimary>Our Services</Button>
            </a>
          </Link>
        </div>
      </Container>
    </Wrapper>
  )
}

