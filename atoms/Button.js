import tw, { styled, css } from 'twin.macro'

const Button = styled.button(({ isPrimary, isSecondary }) => [

  // The common button styles added with the tw import
  tw`2xl:text-lg px-8 py-2.5 font-normal tracking-wide rounded-full outline-none focus:outline-none`,
  tw`transition-all ease-in-out duration-500`,
  

  isPrimary && [
    css`
      background: linear-gradient(90deg, #8375EB 0%, #6D76EA 100%);
      &:hover{

        box-shadow: 0 3px 40px rgb(95 119 245 / 50%);
      }
    `,
    tw`text-white`
  ],

  isSecondary && tw`border-2 border-yellow-600`,
  
])

export default Button