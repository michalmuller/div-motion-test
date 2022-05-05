import React, { useState } from "react";
import tw, { styled } from 'twin.macro'
import Image from 'next/image'

// Atoms, Components  & Sections
import Title from '../atoms/Title'

// Images
import IconArrowDown from '../atoms/IconArrowDown'
import serviceImg from '../public/images/services-agile-dev.png';

const Wrapper = tw.div`px-5 pt-32 pb-12`
const Container = tw.div`container mx-auto text-blue-900 ` 

const Accordion = styled.div(({ isOpen }) => [
  tw`py-6 overflow-hidden cursor-pointer transition-all duration-500 relative`,
  isOpen ? tw`max-h-72` : tw`max-h-20 `,
])

export default function ServicesMain() {

  const services = [
    {
      title: 'Web Application Development',
      text: 'We implement different type of applications such as Custom Web Applications, Large scale systems, Dynamic Applications, Content Rich Systems.',
      serviceImg: 'agile-dev',
      items: [
        {
          id: 1,
          title: 'What technologies do we use?',
          text: "The technology we use for the implementation of a solution very much depends on the client's use case. But we usually use for Backend development technologies such as .NET, NodeJS, and for Frontend Angular, Blazor."
        },
        {
          id: 2,
          title: 'What development methodologies do we use?',
          text: "We use different methodologies depending on the collaboration model we have with our client but we suggest using Agile. We take an Agile iterative development approach to deliver work in small but consumable increments during the development of a digital solution. Requirements, plans, and results are evaluated continuously so we have a natural mechanism for responding to change quickly."
        },
        {
          id: 3,
          title: 'How it works?',
          text: "The first step is to analyse clients' requirements and current situation. Based on the analyses we advise and enable our clients to take most appropriate and informative decisions."
        }
      ]
    },
    {
      title: 'App Modernization',
      text: 'Digitally transforming legacy systems to modern Applications using latest technologies to improve usability, productivity and security.',
      serviceImg: 'app-modernization',
      items: [
        {
          id: 4,
          title: 'Should I modernize my application?',
          text: "To give you accurate response we first need to analyse requirements and current solutions. As a next step we can discuss the benefits of eventual modernization. We offer a free consultation if you want to know more."
        },
        {
          id: 5,
          title: 'What development methodologies do we use?',
          text: "The technology we use for the implementation of the solutions very much depends on the client use case. But we usually use for Backend development technologies such as .NET, NodeJS, and for Frontend - Angular, Blazor. "
        },
      ]
    },
    {
      title: 'Team Extension',
      text: 'You get access to pool of carefully pre-selected software engineers capable of working from start-up companies to big enterprise companies.',
      serviceImg: 'team-extension',
      items: [
        {
          id: 6,
          title: 'Why to choose DIV Motion?',
          text: "We hire only the candidates with the appropriate professional skills, attitude and most importantly who are aligned with our values."
        },
        {
          id: 7,
          title: 'When can we start collaborating together?',
          text: "As a first step we need to know more about your current requirements. Let's book a meeting and discuss more."
        },
      ]
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
      <Container className='container'>

        {services.map((s,i)=>{
          return (
            <div key={i} css={tw`flex justify-between even:flex-row-reverse items-start mb-36`}>
              <div css={tw`xl:w-5/12 2xl:w-6/12`}>
                <Title tag="h3">
                  {s.title}
                </Title>
                <p css={tw`xl:text-lg 2xl:text-xl text-gray-700 mt-6 xl:leading-relaxed 2xl:leading-relaxed font-light`}>
                  {s.text}
                </p>
                <div css={tw`mt-6`}>
                  {s.items.map((item, i)=>{
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
                          <p css={tw`xl:text-lg 2xl:text-xl text-gray-700 xl:leading-normal 2xl:leading-relaxed`}>
                            {item.text}
                          </p>
                        </div>
                        <div css={tw`absolute w-full h-px bottom-0 bg-gradient-to-r from-gray-200/30 via-gray-200 to-gray-200/10`}/>
                      </Accordion>
                    )
                  })}
                </div>
              </div>
              <div css={tw`w-5/12 relative`}>
                <div css={tw`w-full h-full relative`}>
                  <img src={`/images/services-${s.serviceImg}.png`} alt="todo" />
                </div>
                {/* <img src={serviceImg.src} alt="todo"/>             */}
              </div>
            </div>
          )
        })}

        
      </Container>
    </Wrapper>
  )
}

