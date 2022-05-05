import tw from 'twin.macro'
import Marquee from "react-fast-marquee";


const Wrapper = tw.div`bg-gray-50 py-12 2xl:py-16`

export default function HomeServiceSlider() {
  return (    
    <Wrapper>
      <Marquee gradientColor={[249,248,251]}>
        <div css={tw`text-center xl:px-20 2xl:px-28 py-8 2xl:py-10 xl:text-4xl 2xl:text-5xl font-extralight`}>Web APP Development</div>
        <div css={tw`text-center xl:px-20 2xl:px-28 py-8 2xl:py-10 xl:text-4xl 2xl:text-5xl font-extralight`}>Cloud Integration</div>
        <div css={tw`text-center xl:px-20 2xl:px-28 py-8 2xl:py-10 xl:text-4xl 2xl:text-5xl font-extralight`}>Digital Transformation</div>
        <div css={tw`text-center xl:px-20 2xl:px-28 py-8 2xl:py-10 xl:text-4xl 2xl:text-5xl font-extralight`}>Team Extension</div>
      </Marquee>    
      <Marquee direction='right' gradientColor={[249,248,251]}>
        <div css={tw`text-center xl:px-20 2xl:px-28 py-8 2xl:py-10 xl:text-4xl 2xl:text-5xl font-extralight`}>Digitalization</div>
        <div css={tw`text-center xl:px-20 2xl:px-28 py-8 2xl:py-10 xl:text-4xl 2xl:text-5xl font-extralight`}>Application Modernization</div>
        <div css={tw`text-center xl:px-20 2xl:px-28 py-8 2xl:py-10 xl:text-4xl 2xl:text-5xl font-extralight`}>Custom Software Development</div>
        <div css={tw`text-center xl:px-20 2xl:px-28 py-8 2xl:py-10 xl:text-4xl 2xl:text-5xl font-extralight`}>System Integration</div>
      </Marquee>    
    </Wrapper>
  )
}

