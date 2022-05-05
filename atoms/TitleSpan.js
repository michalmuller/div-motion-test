import tw, {styled, css} from 'twin.macro'

const Span = styled.span`
${tw`relative inline-block`}
&:after {
  ${tw`absolute content-['']`}
}

${({ after, before }) => (after || before) ? 
    `&:after {
      width: 24px;
      height: 22px;
      background-image: url('../images/span-${after? 'after': 'before'}-${after? after: before}.svg');
    }`
    :``}
` 

export default function TitleSpan({after, before, styles, children}) {
  return (    
    <Span after={after} before={before} css={styles} >
      {children}
    </Span>
  )
}

