import tw, { styled, css } from 'twin.macro'
import Image from 'next/image'

// Atoms, Components  & Sections
import ContactForm from '../components/ContactForm'
import Title from '../atoms/Title'
import TitleSpan from '../atoms/TitleSpan'

const Wrapper = tw.div`px-5 py-32`
const Container = tw.div`container mx-auto text-blue-900 ` 

export default function HomeContact() {
  const contacts = [
    {name: 'General Inquiries', email: 'info@divmotion.com', icon: 'question'},
    {name: 'Business Inquiries', email: 'contact@divmotion.com', icon: 'business'},
    {name: 'Careers', email: 'careers@divmotion.com', icon: 'career'},
  ]
  return (    
    <Wrapper>
      <Container className='container'>
        <div css={tw`flex flex-col sm:flex-row justify-between items-start`}>
          <div css={tw`w-full sm:w-6/12`}>
            <Title after={true}  tag="h2">
              Let's <TitleSpan after="k" styles={tw`after:right-[-28px] after:bottom-[10px] sm:after:bottom-[15px] after:w-[26px] after:h-[10px]` }> talk</TitleSpan>
            </Title>
            <p css={tw`xl:text-lg 2xl:text-xl text-gray-700 mt-3 sm:mt-6 xl:leading-relaxed 2xl:leading-relaxed font-light`}>
              We are always open to new project inquiries, consultation or possible collaboration. Feel free to reach out with any question.
            </p>
            <div css={tw`mt-6`}>
              {contacts.map((c,i)=>{
                return (
                  <div key={i} css={tw`pt-10 flex items-center`}>
                    <Image src={`/images/icon-${c.icon}.svg`} height="44px" width="44px" alt="todo" />
                    <div css={tw`ml-6`}>
                      <p css={tw`text-xl font-medium`}>{c.name}</p>
                      <a css={tw`text-brand-purple text-lg font-medium`} href={`mailto:${c.email}`}>{c.email}</a> 
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div css={tw`w-full sm:w-5/12 mt-12 sm:mt-0`}>
            <ContactForm/>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

