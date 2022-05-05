import tw from 'twin.macro'
import Marquee from "react-fast-marquee";


const Wrapper = tw.div`bg-gray-50 py-5 xl:py-12 2xl:py-16`

export default function HomeServiceSlider() {
  const row1 = ['Web APP Development', 'Cloud Integration', 'Digital Transformation', 'Team Extension']
  const row2 = ['Digitalization', 'Application Modernization', 'Custom Software Development', 'System Integration']
  return (    
    <Wrapper>
      <Marquee gradientColor={[249,248,251]}>
        {row1.map((r,i)=>{
          return <div key={i} css={tw`text-center px-6 xl:px-20 2xl:px-28 py-5 xl:py-8 2xl:py-10 text-xl xl:text-4xl 2xl:text-5xl font-extralight`}>{r}</div>
        })}
      </Marquee>    
      <Marquee direction='right' gradientColor={[249,248,251]}>
        {row2.map((r,i)=>{
          return <div key={i} css={tw`text-center px-6 xl:px-20 2xl:px-28 py-5 xl:py-8 2xl:py-10 text-xl xl:text-4xl 2xl:text-5xl font-extralight`}>{r}</div>
        })}
      </Marquee>    
    </Wrapper>
  )
}

