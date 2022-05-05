import tw, { styled, css } from 'twin.macro'
import React, { useState } from "react";
import Link from 'next/link'

// Atoms, Components  & Sections
import Button from '../atoms/Button'

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const encode = (data)=> {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleSubmit = (event) =>{
    let data = {
      name: name,
      email:email,
      message: message
    }
    console.log(data)
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...data,
      }),
    })
      .then(() => console.log('success'))
      .catch((error) => alert(error));
  }
  
  return ( 
    <form name="contact" method="POST" data-netlify="true" onSubmit={e => handleSubmit(e)}>
      <input type="hidden" name="form-name" value="contact" />
      <input placeholder='Your full name' name="name" type="text" css={tw`bg-gray-50 w-full px-6 py-4 mb-5 placeholder:text-blue-900/40 text-blue-900`} onChange={(e) => setName(e.target.value)}></input>
      <input placeholder='Your email address' name="email" type="email" css={tw`bg-gray-50 w-full px-6 py-4 mb-5 placeholder:text-blue-900/40 text-blue-900`} onChange={(e) => setEmail(e.target.value)}></input>
      <textarea name="message" rows="7" placeholder='Tell us what you are looking for' css={tw`bg-gray-50 w-full px-6 py-4 placeholder:text-blue-900/40 text-blue-900`} onChange={(e) => setMessage(e.target.value)}></textarea>
      <div css={tw`flex items-start mt-2 leading-tight`}>
        <input id="checkbox-1" aria-describedby="checkbox-1" type="checkbox" css={tw`w-6 h-6 bg-gray-50 border-gray-200 rounded-none -mt-0.5 mr-3`} />
        <label htmlFor="checkbox-1" css={tw`text-gray-700/70`}>
          I confirm that I have read DIV Motion's 
          <Link href="/services">
            <a css={tw`text-brand-purple font-medium hover:underline cursor-pointer`}> Privacy Policy </a>
          </Link>
          and I permit my personal information to be processed 
        </label>
      </div>   
      <div css={tw`flex items-center justify-between pt-6`}>

      <button css={tw`block outline-none focus:outline-none`} type="submit" name="SendMessage">                
        <Button isPrimary>Send Message</Button>
      </button>
      </div>
    </form>
  )
}

