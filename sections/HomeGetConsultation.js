import tw from 'twin.macro'
import Image from 'next/image'

// Atoms, Components  & Sections
import Title from '../atoms/Title'
import TitleSpan from '../atoms/TitleSpan'

// Images
import HomeConsultation from '../public/images/home-consultation.png'

const Wrapper = tw.div`px-5 pb-6 sm:py-32`
const Container = tw.div`container mx-auto text-blue-900` 

export default function HomeGetConsultation() {
  return (    
    <Wrapper>
      <Container className='container'>
        <div css={tw`flex flex-col-reverse sm:flex-row w-full justify-between`}>
          <div css={tw`w-[110%] sm:w-6/12 relative`}>
            <div css={tw`sm:absolute xl:w-[840px] 2xl:w-max right-0 bottom-0 mt-8 sm:mt-0 -ml-16 sm:ml-0`}>
              <Image loading="eager" src={HomeConsultation} alt="todo" quality="85"/>
            </div>
          </div>
          <div css={tw`w-full sm:w-5/12`}>
            <Title tag="h2" align="sm-center">
              <TitleSpan before="g" styles={tw`after:left-[-24px] sm:after:left-[-22px] after:bottom-[7px] sm:after:bottom-[10px] after:w-[24px] after:h-[22px]` }>Get</TitleSpan>
              {' '}a Free Consultation About Your Digital Transformation 
            </Title>
            <p css={tw`xl:text-lg 2xl:text-xl text-gray-700 mt-3 sm:mt-6 xl:leading-relaxed 2xl:leading-relaxed font-light text-center sm:text-left`}>
              Contact us to get a free Consulting and find out how we can work together to elevate your business to the next level by improving customer experience, business efficiency, innovation, and profits.
            </p>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

