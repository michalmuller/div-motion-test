import React, { useState } from "react";
import tw, { styled } from 'twin.macro'

// Atoms, Components  & Sections
import Title from '../atoms/Title'

// Images
import IconArrowDown from '../atoms/IconArrowDown'
import serviceImg from '../public/images/services-agile-dev.png';

const Wrapper = tw.div`px-5 py-32`
const Container = tw.div`container mx-auto text-blue-900 ` 

const Accordion = styled.div(({ isOpen }) => [
  tw`py-6 overflow-hidden cursor-pointer transition-all duration-500 relative`,
  isOpen ? tw`max-h-56` : tw`max-h-20 `,
])

export default function ServicesMain() {
  const items = [
    {
      id: 1,
      title: 'Why go Agile in a first place?',
      text: 'Utilizing Agile allows you to gain a competitive advantage from fast releases and better innovation in your services and products.'
    },
    {
      id: 2,
      title: 'How do we work with Agile?',
      text: 'Utilizing Agile allows you to gain a competitive advantage from fast releases and better innovation in your services and products.'
    },
    {
      id: 3,
      title: 'Which software languages are we using?',
      text: 'Utilizing Agile allows you to gain a competitive advantage from fast releases and better innovation in your services and products.'
    }
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
          <div css={tw`w-5/12`}>
            <Title tag="h3">
              Agile Development
            </Title>
            <p css={tw`text-lg text-gray-700 mt-6 leading-relaxed font-light`}>
              Utilizing Agile allows you to gain a competitive advantage from fast 
              releases and better innovation in your services and products. Agile 
              processes help you achieve better productivity and adaptability in 
              the quick-moving business environment.
            </p>
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
                      <p css={tw`text-lg text-gray-700`}>
                        {item.text}
                      </p>
                    </div>
                    <div css={tw`absolute w-full h-px bottom-0 bg-gradient-to-r from-gray-200/30 via-gray-200 to-gray-200/10`}/>
                  </Accordion>
                )
              })}
            </div>
          </div>
          <div css={tw`w-5/12`}>
            <img src={serviceImg.src} alt="todo"/>            
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

