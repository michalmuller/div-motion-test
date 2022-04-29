import tw, {styled} from 'twin.macro'

const TitleWrapper = styled.div`
  ${tw`text-blue-900`},
  ${({ theme }) => theme == 'white' && tw`text-gray-100`}
  ${({ align }) => align == 'center' && tw`text-center`}
  h1{
    ${tw`text-6xl leading-snug`}
    ${({ regular }) => regular ? tw`font-normal` : `font-light`}
  }
  h2{
    ${({ theme }) => theme == 'white' && tw`text-white`}
    ${tw`text-5xl leading-tight font-normal`}
  }
  h3{
    ${tw`text-4xl font-normal`}
  }
  h4{
    ${tw`text-3xl font-normal`}
  }
  h5{
    ${tw`text-2xl font-normal`}
  }
`

export default function Title({tag, theme, regular, align, children}) {
  const Tag = tag;
  return (    
    <TitleWrapper theme={theme} regular={regular} align={align}>
      <Tag>{children}</Tag>
    </TitleWrapper>
  )
}

