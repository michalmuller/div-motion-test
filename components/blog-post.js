import Link from 'next/link'
import Image from 'next/image'
import tw from 'twin.macro'
import Title from '../atoms/Title'

export default function BlogPost( {id, image, label, title} ) {
  return(
    <Link href={`/posts/${id}`}>
        <div css={tw`hover:cursor-pointer`}>           
          <div css={tw`w-full h-52 relative`}>
            <Image 
              className="hover:scale-105"
              src={image}
              alt="todo"
              layout='fill'/>
          </div> 
          <p css={tw`text-brand-turquoise uppercase font-bold pb-3 pt-6`}>{label}</p>
          <Title tag="h5" theme="black">{title}</Title> 
        </div>  
    </Link>     
  )
}