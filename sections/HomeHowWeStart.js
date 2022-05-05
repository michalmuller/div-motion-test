import tw, { styled } from 'twin.macro'
import React, { useState, useEffect, useRef } from 'react';

// Atoms, Components  & Sections
import Title from '../atoms/Title'
import TitleSpan from '../atoms/TitleSpan'

// Images
import IconArrowDown from '../atoms/IconArrowDown'
import iconSlash from '../public/images/li-slash.svg';

const Wrapper = tw.div`px-5 pt-14 sm:pt-32 pb-12 sm:pb-28`
const Container = tw.div`container mx-auto text-blue-900 min-h-[540px]` 

const Box = styled.div(({ isOpen }) => [
  tw`bg-gray-50 py-7 px-6 sm:px-11 relative w-full mb-3 text-lg sm:text-xl overflow-hidden transition-all duration-500`,
  isOpen ? tw` max-h-80 sm:max-h-64 cursor-default` : tw` max-h-20  cursor-pointer`,
])

const BoxProgressBar = styled.div(({isOpen})=>[
  tw`absolute bg-gradient-to-r from-brand-purple via-brand-blue to-brand-turquoise w-full h-1 top-[0px] left-0 `,
  isOpen ? tw`block` : tw`hidden`,
])

const BoxProgressBarOverlay = styled.div(({isOpen})=>[
  tw`absolute block bg-gray-50 w-full h-1 top-[0px] right-0 ease-linear`,
  isOpen ? tw`w-0 duration-[12000ms]` : tw`w-full duration-[0ms]`,
])

export default function HomeHowWeStart() {
  const items = [
    { 
      id: 1, title: "Start an initial discussion", 
      content: [
        "Tell us what problems does your team face",
        "What type of software development/consultancy do you need",
        "What deadlines and additional arrangements do you have"
      ] 
    },
    { 
      id: 2, title: "Analyzing possible solution",
      content: [
        "Our team needs to conclude whether our services could be utilized and in help",
        "If yes, we'd prepare an action plan and suggest a team",
        "If no, we'd still suggest an alternative vendor or solution"
      ] 
    },
    { id: 3, title: "Making you an offer",
      content: [
        "We explain everything in details about how your project will go - what our and your responsibilities are",
        "We will tell you what is possible and what your expectations should be",
        "We will propose a collaboration model if you haven't picked or not sure which is optimal"
      ]
    },
  ]

  const [active, setActive] = useState(0);
  const [boxInView, setBoxInView] = useState(false);
  const myRef = useRef();
  
  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      if(entries[0].isIntersecting && !boxInView)
      {
        setBoxInView(entries[0].isIntersecting)
      }
    })
    observer.observe(myRef.current)
  }, [])

  useEffect(()=>{
    if ( boxInView ){
      setActive(1)
    }
  }, [boxInView])

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((active)=> active==3 ? 1 :active+1);
    }, 12000);
    return () => clearInterval(interval);
  }, [active]);

  return (    
    <Wrapper>
      <Container className='container'>
        <Title after={true} tag="h2">
          How We <TitleSpan after="t" styles={tw`after:right-[-24px] after:bottom-[11px] sm:after:bottom-[15px] after:w-[21px] after:h-[12px]` }> Start</TitleSpan>
        </Title>
        <div ref={myRef} css={tw`mt-6`}>
          {items.map(i=>{
            return (
              <Box className="group"
                onClick={()=>setActive(i.id)} 
                key={i.id}
                isOpen={i.id == active}
              >
                <BoxProgressBar isOpen={i.id == active}/>
                <BoxProgressBarOverlay isOpen={i.id == active}/>
                <h1 css={[tw`font-medium mb-3 text-opacity-50 duration-300 flex justify-between items-center`, i.id != active && tw`text-blue-900/60 group-hover:text-blue-900/80`]}>{i.title}
                <span css={tw`transition-all duration-300 delay-100`} className={i.id == active && 'rotate-180'}><IconArrowDown/></span>
                </h1>
                <ul>
                  {i.content.map((c,i)=>{
                    return(
                      <li key={i} css={tw`text-base xl:text-lg 2xl:text-xl py-2 flex sm:items-center -ml-1 sm:ml-3 tracking-tight sm:tracking-normal`}> 
                        <img src={iconSlash.src} css={tw`mt-1.5 sm:mt-0 mr-2 sm:mr-3 w-2.5 sm:w-3.5 h-3 sm:h-[18px]`} alt="todo"/> 
                        {c}
                      </li>
                    ) 
                  })}
                </ul>
              </Box>
            )
          })}  
        </div>
      </Container>
    </Wrapper>
  )
}

