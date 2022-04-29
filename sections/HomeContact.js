import tw, { styled, css } from 'twin.macro'
import Link from 'next/link'

// Atoms, Components  & Sections
import Title from '../atoms/Title'
import TitleSpan from '../atoms/TitleSpan'
import Button from '../atoms/Button'

// Images
import iconStar from '../public/images/icon-star.svg';

const Wrapper = tw.div`px-5 py-32`
const Container = tw.div`container mx-auto text-blue-900 ` 

export default function HomeContact() {
  const contacts = [
    {name: 'General Inquiries', email: 'info@divmotion.com'},
    {name: 'Business Inquiries', email: 'contact@divmotion.com'},
    {name: 'Careers', email: 'careers@divmotion.com'},
  ]
  return (    
    <Wrapper>
      <Container>
        <div css={tw`flex justify-between items-start`}>
          <div css={tw`w-6/12`}>
            <Title after={true}  tag="h2">
              Let's <TitleSpan after="k" styles={tw`after:right-[-28px] after:bottom-[10px] after:w-[26px] after:h-[10px]` }> talk</TitleSpan>
            </Title>
            <p css={tw`text-xl text-gray-700 mt-6 leading-relaxed font-light`}>
              We are always open to new project inquiries, consultation or possible collaboration. Feel free to reach out with any question.
            </p>
            <div css={tw`mt-6`}>
              {contacts.map((c,i)=>{
                return (
                  <div key={i} css={tw`pt-10 flex items-center`}>
                    <img src={iconStar.src} alt="todo"/>
                    <div css={tw`ml-6`}>
                      <p css={tw`text-xl font-medium`}>{c.name}</p>
                      <a css={tw`text-brand-purple text-lg font-medium`} href={`mailto:${c.email}`}>{c.email}</a> 
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div css={tw`w-5/12`}>
            <form>
              <input placeholder='Your full name' name="name" type="text" css={tw`bg-gray-50 w-full px-6 py-4 mb-5 placeholder:text-blue-900/40 text-blue-900`}></input>
              <input placeholder='Your email address' name="email" type="email" css={tw`bg-gray-50 w-full px-6 py-4 mb-5 placeholder:text-blue-900/40 text-blue-900`}></input>
              <textarea name="message" rows="7" placeholder='Tell us what you are looking for' css={tw`bg-gray-50 w-full px-6 py-4 placeholder:text-blue-900/40 text-blue-900`}></textarea>
              <div css={tw`flex items-start mt-2 leading-tight`}>
                <input id="checkbox-1" aria-describedby="checkbox-1" type="checkbox" css={tw`w-6 h-6 bg-gray-50 border-gray-200 rounded-none -mt-0.5 mr-3`} />
                <label htmlFor="checkbox-1" css={tw`text-gray-700/70`}>
                  I confirm that I have read DIV Motion's 
                  <Link href="/services">
                    <a css={tw`text-brand-purple font-medium hover:underline cursor-pointer`}> Privacy Policy </a>
                  </Link>
                  and I permit my personal information to be processed 
                </label>
              </div>   
              <Link  href="#">
                <a css={tw`block pt-6`}>                
                  <Button isPrimary>Send Message</Button>
                </a>
              </Link>        
            </form>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

