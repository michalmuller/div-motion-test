import tw, { styled, css } from 'twin.macro'
import Image from 'next/image'

// Atoms, Components  & Sections
import Title from '../atoms/Title'

// Images
import avatar from '../public/images/user-testimonial.png'
import quotes from '../public/images/quotes.svg'
import testimonialBg from '../public/images/testimonial-bg.svg'

const Wrapper = styled.div(() => [
  tw`px-5 relative`,
  css`background: linear-gradient(90deg, #8375EB 0%, #6D76EA 100%);`,
])
const Container = tw.div`container mx-auto` 

export default function HomeTestimonial() {
  return (    
    <Wrapper>
      <Container>       
        <div css={tw`flex items-center justify-between py-28`}>
          <div css={tw`w-4/12 `}>
            <Title tag="h2" theme="white">
              Kind Words from Our Dear Clients
            </Title>
          </div>
          <img src={testimonialBg.src} css={tw`opacity-[0.07] absolute top-0 left-0 h-full`}  alt="div motion background" />
          <div css={tw`w-7/12 relative`}>
            <div css={tw`absolute top-2 -left-16`}>
              <Image src={quotes}  alt="todo" />
            </div>
            <p css={tw`text-white text-xl font-light italic border-b pb-6 border-white/10`}>
              DIV Motion has been an invaluable part of our SaaS development bringing our custom components 
              to life. Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet adipiscing elit. 
              Fusce ultricies odio quis libero egestas aliquet. Nulla consequat pulvinar turpis. 
            </p>
            <div css={tw`pt-6 flex items-center`}>
              <Image src={avatar} css={tw`rounded-full`} alt="todo" height="48"  width="48"/>
              <div css={tw`text-white pl-3`}>
                <p css={tw`text-lg font-normal`}>Gabriela Hencz</p>
                <p css={tw`font-light`}>Creative Director at SpaceX</p>
              </div>
            </div>
          </div>
        </div> 
      </Container>
    </Wrapper>
  )
}

