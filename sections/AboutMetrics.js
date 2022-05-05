import Title from '../atoms/Title'
import tw from 'twin.macro'

const Wrapper = tw.div`px-5 py-20 bg-gray-50`
const Container = tw.div`container mx-auto text-blue-900` 

export default function AboutMetrics() {
  return (    
    <Wrapper>
      <Container className='container'>
        <div css={tw`grid sm:grid-cols-2 lg:grid-cols-4 gap-y-14 justify-items-center`}>
          <div css={tw`flex flex-col items-center`}>
            <Title tag="h2" theme="black">15+</Title>
            <p css={tw`text-xl pt-2 font-normal`}>specialized consultants</p> 
          </div>
          <div css={tw`flex flex-col items-center`}>
            <Title tag="h2" theme="black">200%</Title> 
            <p css={tw`text-xl pt-2 font-normal`}>return on investment</p>
          </div>
          <div css={tw`flex flex-col items-center`}>
            <Title tag="h2" theme="black">8 years</Title>
            <p css={tw`text-xl pt-2 font-normal`}>of experience</p> 
          </div>
          <div css={tw`flex flex-col items-center`}>
            <Title tag="h2" theme="black">99%</Title>
            <p css={tw`text-xl pt-2 font-normal`}>happy customers</p> 
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

