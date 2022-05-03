import tw, { styled, css } from 'twin.macro'

// Atoms, Components  & Sections
import Title from '../atoms/Title'
import TitleSpan from '../atoms/TitleSpan'

// Images
import illustration from '../public/images/illustration-how-we-work.svg';

const Wrapper = tw.div`px-5 pb-32 pt-20`
const Container = tw.div`container mx-auto text-blue-900 ` 

export default function HomeHowWeWork() {
  const workTypes = ['Fixed Price', 'Time & Material', 'Dedicated Team']
  return (    
    <Wrapper>
      <Container>
        <div css={tw`flex justify-between items-start`}>
          <div css={tw`w-4/12`}>
            <Title after={true}  tag="h2">
              How We <TitleSpan after="k" styles={tw`after:right-[-28px] after:bottom-[10px] after:w-[26px] after:h-[10px]` }> Work</TitleSpan>
            </Title>
            <p css={tw`text-xl text-gray-700 mt-6 leading-relaxed font-light`}>
              We are flexible with the way we work, ... Integer mattis eu odio sit amet lacinia. Praesent eget ultrices elit, id bibendum est aliquam feugiat.
            </p>
            <ul css={tw`mt-8`}>
              {workTypes.map((w,i)=>{
                return (
                  <li key={i} css={tw`text-xl text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-blue to-brand-turquoise font-medium py-1 flex items-center`}>
                    <svg css={tw`mr-5`} width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.4814 4.82252C12.7083 3.69504 14.0778 2.73393 15.5523 1.96069L14.2409 0.118164C12.7075 0.986217 11.2759 2.026 9.9766 3.22006C8.0957 4.94864 6.52902 6.96673 5.3363 9.18677C5.10837 8.79804 4.79482 8.31152 4.39289 7.79342C3.0866 6.10959 1.98578 5.40221 1.98578 5.40221L0.441406 6.94658C0.441406 6.94658 1.65143 7.79342 2.84851 9.3378C3.57209 10.2713 4.18006 11.513 4.25764 11.8233H6.62337C7.64512 9.18677 9.42896 6.70879 11.4814 4.82252Z" fill="#8C74EB"/>
                    </svg>
                    {w}
                  </li>
                )
              })}
            </ul>
          </div>
          <div css={tw`w-7/12`}>
            <img src={illustration.src} alt="todo"/>   
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

