import tw from 'twin.macro'
import Image from 'next/image'

const Wrapper = tw.div`px-5 py-20 bg-gray-50`
const Container = tw.div`container mx-auto text-blue-900` 

export default function ServicesList() {
  const items = [
    {
      title: 'Application Development',
      content: ['Microservices', 'API Development', 'Application Modernization'],
      icon: 'app'
    },
    {
      title: 'Agile Development ',
      content: ['Scrum', 'Kanban', 'Scrumban'],
      icon: 'agile'
    },
    {
      title: 'System Integration',
      content: ['Webhooks', 'Cloud Solution', 'Enterprise Application'],
      icon: 'system'
    },
  ]
  return (    
    <Wrapper>
      <Container className='container'>
        <div css={tw`grid sm:grid-cols-2 lg:grid-cols-3 gap-y-14 justify-items-center`}>
          {items.map((item, i)=>{
            return (
              <div key={i} css={tw`flex flex-col items-center`}>
                <Image src={`/images/icon-${item.icon}.svg`} height="44px" width="44px" alt="todo" />
                <p css={tw`font-bold text-xl uppercase pt-8`}>{item.title}</p>
                {item.content.map((c,i)=>{
                  return <p key={i} css={tw`xl:text-lg 2xl:text-xl pt-2 text-gray-700 2xl:leading-relaxed`}>{c}</p>
                })}
              </div>
            )
          })}
        </div>
      </Container>
    </Wrapper>
  )
}

