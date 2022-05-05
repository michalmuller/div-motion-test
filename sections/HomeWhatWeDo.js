import tw from 'twin.macro'
import Link from 'next/link'

// Atoms, Components  & Sections
import Title from '../atoms/Title'
import TitleSpan from '../atoms/TitleSpan'

// Images
import illustration from '../public/images/illustration-what-we-do.svg';

const Wrapper = tw.div`px-5 pt-16 sm:pt-32 pb-16 sm:pb-24`
const Container = tw.div`container mx-auto text-blue-900 ` 

export default function HomeWhatWeDo() {
  return (    
    <Wrapper>
      <Container className='container'>
        <div css={tw`flex flex-col sm:flex-row justify-between sm:items-end`}>
          <div css={tw`w-full sm:w-3/12`}>
            <Title after={true}  tag="h2">
              <TitleSpan before="w" styles={tw`hidden sm:inline-block after:left-[-26px] after:bottom-[14px] after:w-[27px] after:h-[12px]` }>
                What
              </TitleSpan> <span css={tw`inline-block sm:hidden`}>What</span> We <span css={tw`hidden sm:inline-block`}>Do</span>
              <TitleSpan after="s" styles={tw`inline-block sm:hidden after:right-[-24px] after:bottom-[5px] after:w-[24px] after:h-[22px]` }>
                Do
              </TitleSpan>
            </Title>
            <p css={tw`xl:text-lg 2xl:text-xl text-gray-700 mt-3 sm:mt-6 xl:leading-relaxed 2xl:leading-relaxed font-light`}>
              DIV Motion provides Consulting and Agile Development Services. 
              <br/><br/>
              We can work together to elevate your business to the next level by improving customer experience, business efficiency, innovation, and profits; {' '}
              <Link href="/services">
                <a css={tw`text-brand-purple cursor-pointer font-medium hover:underline whitespace-nowrap`}>See our services &rsaquo;</a>
              </Link>
            </p>
          </div>
          <div css={tw`w-full sm:w-8/12`}>
            <img src={illustration.src} css={tw`sm:-ml-6 mt-12 sm:mt-0`} alt="todo"/>            
            <div css={tw`grid grid-cols-1 sm:grid-cols-3 gap-y-8 gap-x-20 mt-8`}>
              <div>
                <h1 css={tw`font-bold text-17px sm:text-xl uppercase`}>Web Development</h1>
                <p css={tw`xl:text-lg 2xl:text-xl pt-1 sm:pt-2 text-gray-700 2xl:leading-relaxed tracking-tight sm:tracking-normal`}>We strive for technical excellence and don't settle to be mediocre - we surround ourselves with top talent.</p>
              </div>
              <div>
                <h1 css={tw`font-bold text-17px sm:text-xl uppercase`}>App Modernization</h1>
                <p css={tw`xl:text-lg 2xl:text-xl pt-1 sm:pt-2 text-gray-700 2xl:leading-relaxed tracking-tight sm:tracking-normal`}>We strive for technical excellence and don't settle to be mediocre - we surround ourselves with top talent. Lorem ipsum dolor sit.</p>
              </div>
              <div>
                <h1 css={tw`font-bold text-17px sm:text-xl uppercase`}>Team Extension</h1>
                <p css={tw`xl:text-lg 2xl:text-xl pt-1 sm:pt-2 text-gray-700 2xl:leading-relaxed tracking-tight sm:tracking-normal`}>We strive for technical excellence and don't settle to be mediocre - we surround ourselves with top talent.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

