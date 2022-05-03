import tw from 'twin.macro'

// Images
import iconStar from '../public/images/icon-star.svg';

const Wrapper = tw.div`px-5 py-20 bg-gray-50`
const Container = tw.div`container mx-auto text-blue-900` 

export default function ServicesList() {
  const items = [
    {
      title: 'Agile development',
      content: ['Scrum', 'Kanban', 'Lean UX']
    },
    {
      title: 'API Management',
      content: ['MicroServices', 'Lifecycle management', 'API Gateway']
    },
    {
      title: 'Agile development',
      content: ['Scrum', 'Kanban', 'Lean UX']
    },
    {
      title: 'System Integration',
      content: ['REST API', 'Webhooks', 'Cloud']
    },
  ]
  return (    
    <Wrapper>
      <Container>
        <div css={tw`grid sm:grid-cols-2 lg:grid-cols-4 gap-y-14 justify-items-center`}>
          {items.map((item, i)=>{
            return (
              <div key={i} css={tw`flex flex-col items-center`}>
                <img src={iconStar.src} alt="todo"/>
                <p css={tw`font-bold text-xl uppercase pt-8`}>{item.title}</p>
                {item.content.map((c,i)=>{
                  return <p key={i} css={tw`text-lg pt-2`}>{c}</p>
                })}
              </div>
            )
          })}
        </div>
      </Container>
    </Wrapper>
  )
}

