import tw from 'twin.macro'
import Link from 'next/link'

// Atoms, Components  & Sections
import Title from '../atoms/Title'
import TitleSpan from '../atoms/TitleSpan'

// Images
import iconGrow from '../public/images/icon-grow.svg';
import iconFire from '../public/images/icon-fire.svg';
import iconStar from '../public/images/icon-star.svg';
import iconProtect from '../public/images/icon-protect.svg';

const Wrapper = tw.div`px-5 py-32`
const Container = tw.div`container mx-auto text-blue-900` 

export default function HomeValues() {
  return (    
    <Wrapper>
      <Container className='container'>
        <div css={tw`flex justify-between items-end`}>
          <div css={tw`w-4/12 xl:pr-3 2xl:pr-0`}>
            <Title after={true} tag="h2">We Transform Businesses into Digital{' '}
              <TitleSpan after="s" styles={tw`after:right-[-24px] after:bottom-[8px] after:w-[24px] after:h-[22px]` }>Winners</TitleSpan>
            </Title>
            <p css={tw`xl:text-lg 2xl:text-xl text-gray-700 mt-6 xl:leading-relaxed 2xl:leading-relaxed font-light`}>
              We provide services from Team Extension to IT Strategy Consulting which enables companies not only to have their ideas 
              turned into software products but also find themselves consulted and guided on the journey so they can continue developing 
              or supporting their products independently in the future. 
              <br/><br/>
              We have a pretty good grip on what leads to successful digital projects. Our values define the frame in which we operate;{" "}
              <Link href="/about">
                <a css={tw`text-brand-purple cursor-pointer font-medium hover:underline`}>Read more &rsaquo;</a>
              </Link>
            </p>
          </div>
          <div css={tw`w-7/12 grid grid-cols-2 gap-y-14 gap-x-24`}>
            <div>
              <img src={iconGrow.src} alt="todo"/>
              <p css={tw`font-bold text-xl uppercase pt-8`}>Proficiency </p>
              <p css={tw`xl:text-lg 2xl:text-xl pt-2 text-gray-700 2xl:leading-relaxed`}>We strive for technical excellence and don't settle to be mediocre - we surround ourselves with top talent.</p>
            </div>
            <div>
              <img src={iconProtect.src} alt="todo"/>
              <p css={tw`font-bold text-xl uppercase pt-8`}>Integrity</p>
              <p css={tw`xl:text-lg 2xl:text-xl pt-2 text-gray-700 2xl:leading-relaxed`}>Being transparent is the fundamental for the way we communicate and build trust with our clients.</p>
            </div>
            <div>
              <img src={iconStar.src} alt="todo"/>
              <p css={tw`font-bold text-xl uppercase pt-8`}>Service-minded</p>
              <p css={tw`xl:text-lg 2xl:text-xl pt-2 text-gray-700 2xl:leading-relaxed`}>We do not look only on the technical solutions but also on how our clients feel and what their business frustrations are. </p>
            </div>
            <div>
              <img src={iconFire.src} alt="todo"/>
              <p css={tw`font-bold text-xl uppercase pt-8`}>Passion/Fervour</p>
              <p css={tw`xl:text-lg 2xl:text-xl pt-2 text-gray-700 2xl:leading-relaxed`}>We are passionate about technology and we keep exploring, improving and challenging the status quo.</p>
            </div>
            
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

