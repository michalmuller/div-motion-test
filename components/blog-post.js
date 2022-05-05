import Link from 'next/link'
import Image from 'next/image'
import tw from 'twin.macro'
import Title from '../atoms/Title'

export default function BlogPost( {id, image, label, title, name} ) {
  return(
    <Link href={`/posts/${name}`}>
        <div css={tw`hover:cursor-pointer`}> 
          <div css={tw`relative h-52`}>
              <Image
                src={image}
                className="scale105"
                alt="todo"
                layout='fill'/>
          </div>
          <p css={tw`text-brand-turquoise uppercase font-bold pb-3 pt-6`}>{label}</p>
          <Title tag="h5" theme="black">{title}</Title> 
        </div>  
    </Link>     
  )
}