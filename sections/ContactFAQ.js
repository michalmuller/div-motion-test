import React, { useState } from "react";
import tw, { styled } from 'twin.macro'

// Atoms, Components  & Sections
import Title from '../atoms/Title'
import TitleSpan from '../atoms/TitleSpan'

// Images
import IconArrowDown from '../atoms/IconArrowDown'
import illustration from '../public/images/faq-illustration.svg';

const Wrapper = tw.div`px-5 bg-gray-50 py-32`
const Container = tw.div`container mx-auto text-blue-900 ` 

const Accordion = styled.div(({ isOpen }) => [
  tw`py-6 overflow-hidden cursor-pointer transition-all duration-500 relative`,
  isOpen ? tw`max-h-48` : tw`max-h-20`,
])

export default function ContactFAQ() {
  const items = [
    {
      id: 1,
      title: 'Can our internal development team collaborate with yours at div motion?',
      text: 'Utilizing Agile allows you to gain a competitive advantage from fast releases and better innovation in your services and products.'
    },
    {
      id: 2,
      title: 'What is the average price for your services?',
      text: 'Utilizing Agile allows you to gain a competitive advantage from fast releases and better innovation in your services and products.'
    },
    {
      id: 3,
      title: 'What do your charge for an hour of consultation?',
      text: 'Utilizing Agile allows you to gain a competitive advantage from fast releases and better innovation in your services and products.'
    },
    {
      id: 4,
      title: 'Can our internal development team collaborate with you at div motion?',
      text: 'Utilizing Agile allows you to gain a competitive advantage from fast releases and better innovation in your services and products.'
    },
    {
      id: 5,
      title: 'What is the average price for your services?',
      text: 'Utilizing Agile allows you to gain a competitive advantage from fast releases and better innovation in your services and products.'
    },
    {
      id: 6,
      title: 'What do your charge for an hour of consultation?',
      text: 'Utilizing Agile allows you to gain a competitive advantage from fast releases and better innovation in your services and products.'
    },
    {
      id: 7,
      title: 'What do your charge for an hour of consultation?',
      text: 'Utilizing Agile allows you to gain a competitive advantage from fast releases and better innovation in your services and products.'
    },
  ]

  const [activeAccordions, setActiveAccordions] = useState([]);
  const checkArray = (array, val) => {
    const arr = array;
    arr.indexOf(val) !== -1 ? arr.splice(arr.indexOf(val), 1) : arr.push(val);
    return arr;
  };
  return (    
    <Wrapper>
      <Container>
        <div css={tw`flex justify-between items-start`}>
          <div css={tw`w-7/12`}>
            <Title after={true} tag="h2">Frequently Asked
              <TitleSpan after="s" styles={tw`after:right-[-24px] after:bottom-[4px] after:w-[24px] after:h-[22px]` }> Questions</TitleSpan>
            </Title>
            <div css={tw`mt-6`}>
              {items.map((item, i)=>{
                return (
                  <Accordion 
                    key={item.id}
                    isOpen={activeAccordions.includes(item.id)}
                    onClick={() =>
                      setActiveAccordions([...checkArray(activeAccordions, item.id)])
                    }
                  >
                    <h1 css={tw`flex justify-between items-center text-xl font-normal pb-6`}>
                      {item.title}
                      <span css={tw`transition-all duration-300`} className={activeAccordions.includes(item.id) && 'rotate-180'}><IconArrowDown/></span>
                    </h1>
                    <div>
                      <p css={tw`text-lg text-gray-700 pb-1`}>
                        {item.text}
                      </p>
                    </div>
                    <div css={tw`absolute w-full h-px bottom-0 bg-gradient-to-r from-gray-200/30 via-gray-200 to-gray-200/10`}/>
                  </Accordion>
                )
              })}
            </div>
          </div>
          <div css={tw`w-4/12`}>
            <img src={illustration.src} alt="todo"/>                
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

