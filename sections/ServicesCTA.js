import tw from 'twin.macro'
import Link from 'next/link'

// Atoms, Components  & Sections
import Title from '../atoms/Title'
import TitleSpan from '../atoms/TitleSpan'

const Wrapper = tw.div`px-5`
const Container = tw.div`container mx-auto text-white pb-32 relative` 


export default function ServicesCTA() {
  return (    
    <Wrapper>
      <Container className='container'>        
        <div css={tw`w-full flex justify-between items-start`}>
          <div css={tw`w-5/12 pr-12`}>
            <Title after={true} tag="h2">
              Get the Maximum of Your IT {' '}<TitleSpan after="t" styles={tw`after:right-[-24px] after:bottom-[15px] after:w-[21px] after:h-[12px]` }>Investment</TitleSpan>
            </Title>
          </div>
          <div css={tw`w-6/12 -mt-3 `}>
            <p css={tw`text-xl text-gray-700 mt-6 leading-relaxed font-light leading-normal`}>
              Our team can work with your company to elevate your business by improving customer experience, business efficiency, innovation & profits. 
              <Link  href="/contact">
              <a css={tw`block text-brand-purple font-medium mt-5 cursor-pointer hover:underline`}>                
                Drive the digital transformation of your company
              </a>
            </Link>
            </p>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

