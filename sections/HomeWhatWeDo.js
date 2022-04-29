import tw from 'twin.macro'
import Link from 'next/link'

// Atoms, Components  & Sections
import Title from '../atoms/Title'
import TitleSpan from '../atoms/TitleSpan'

// Images
import illustration from '../public/images/illustration-what-we-do.svg';

const Wrapper = tw.div`px-5 py-32`
const Container = tw.div`container mx-auto text-blue-900 ` 



export default function HomeWhatWeDo() {
  return (    
    <Wrapper>
      <Container>
        <div css={tw`flex justify-between items-end`}>
          <div css={tw`w-3/12`}>
            <Title after={true}  tag="h2">
              <TitleSpan before="w" styles={tw`after:left-[-26px] after:bottom-[10px] after:w-[27px] after:h-[12px]` }>
                What
              </TitleSpan> We Do
            </Title>
            <p css={tw`text-xl text-gray-700 mt-6 leading-relaxed font-light`}>
              DIV Motion provides Consulting and Agile Development Services. 
              <br/><br/>
              We can work together to elevate your business to the next level by improving customer experience, business efficiency, innovation, and profits; {' '}
              <Link href="/services">
                <a css={tw`text-brand-purple cursor-pointer font-medium hover:underline`}>See our services &rsaquo;</a>
              </Link>
            </p>
          </div>
          <div css={tw`w-8/12`}>
            <img src={illustration.src} alt="todo"/>            
            <div css={tw`grid grid-cols-3 gap-x-20 mt-8`}>
              <div>
                <h1 css={tw`font-bold text-xl uppercase`}>Web App Development</h1>
                <p css={tw`text-lg pt-2 leading-normal`}>We strive for technical excellence and don't settle to be mediocre - we surround ourselves with top talent.</p>
              </div>
              <div>
                <h1 css={tw`font-bold text-xl uppercase`}>App Modernization</h1>
                <p css={tw`text-lg pt-2 leading-normal`}>We strive for technical excellence and don't settle to be mediocre - we surround ourselves with top talent. Lorem ipsum dolor sit.</p>
              </div>
              <div>
                <h1 css={tw`font-bold text-xl uppercase`}>Team Extension</h1>
                <p css={tw`text-lg pt-2 leading-normal`}>We strive for technical excellence and don't settle to be mediocre - we surround ourselves with top talent.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}
