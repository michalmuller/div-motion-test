import tw from 'twin.macro'
import Link from 'next/link'

// Atoms, Components  & Sections
import Title from '../atoms/Title'
import TitleSpan from '../atoms/TitleSpan'
import Button from '../atoms/Button'

// Images
import illustration from '../public/images/services-introduction-illustration.svg';

const Wrapper = tw.div`px-5 py-32`
const Container = tw.div`container mx-auto text-blue-900 ` 



export default function ServicesIntroduction() {
  return (    
    <Wrapper>
      <Container>
        <div css={tw`flex justify-between items-center`}>
          <div css={tw`w-6/12`}>
            <Title after={true}  tag="h2">
              Modernize Your Business & Save Money at the Same
              <TitleSpan after="e" styles={tw`after:right-[-22px] after:top-[10px] after:w-[23px] after:h-[24px]` }>
                Time
              </TitleSpan>
            </Title>
            <p css={tw`text-xl text-gray-700 mt-6 leading-relaxed font-light`}>
              A lot of organizations spend a large amount of money and time simply maintaining old, legacy systems and products. 
              <br/><br/>
              This creates a development bottleneck which can delay and slow your processes, becoming it impossible to keep up with business demands.
              <Link  href="/contact">
              <a css={tw`block pt-8`}>                
                <Button isPrimary>Contact Us</Button>
              </a>
            </Link>
            </p>
          </div>
          <div css={tw`w-5/12`}>
            <img src={illustration.src} alt="todo"/>            
            
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

