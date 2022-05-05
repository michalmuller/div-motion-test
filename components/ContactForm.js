import tw, { styled, css } from 'twin.macro'
import React, { useState } from "react";
import Link from 'next/link'

// Atoms, Components  & Sections
import Button from '../atoms/Button'

const onSubmit = async (event, setSubmitText) => {
  event.preventDefault();
  setSubmitText("...");
  const formElements = [...event.currentTarget.elements];
  const isValid =
    formElements.filter((elem) => elem.name === "bot-field")[0].value === "";

  const validFormElements = isValid ? formElements : [];

  if (validFormElements.length < 1) {
    setSubmitText("It looks like you filled out too many fields!");
  } else {
    const filledOutElements = validFormElements
      .filter((elem) => !!elem.value)
      .map(
        (element) =>
          encodeURIComponent(element.name) +
          "=" +
          encodeURIComponent(element.value)
      )
      .join("&");

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: filledOutElements,
    })
      .then(() => {
        setSubmitText("Your message has been sent");
      })
      .catch((_) => {
        setSubmitText(
          "Something went wrong, please write us an email"
        );
      });
  }
};

export default function ContactForm() {
  const [submitText, setSubmitText] = useState(null);
  return ( 
    <form name="contact" method="POST" data-netlify="true" onSubmit={e => onSubmit(e, setSubmitText)}>
      <p style={{ display: "none" }}>
        <label>
          Don't fill this out if you expect to hear from us!
          <input name="bot-field" value="" readOnly />
        </label>
      </p>
      <input placeholder='Your full name' name="name" type="text" css={tw`bg-gray-50 w-full px-6 py-4 mb-5 placeholder:text-blue-900/40 text-blue-900`}></input>
      <input placeholder='Your email address' name="email" type="email" css={tw`bg-gray-50 w-full px-6 py-4 mb-5 placeholder:text-blue-900/40 text-blue-900`}></input>
      <textarea name="message" rows="7" placeholder='Tell us what you are looking for' css={tw`bg-gray-50 w-full px-6 py-4 placeholder:text-blue-900/40 text-blue-900`}></textarea>
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

      <button css={tw`block`} type="submit" name="SendMessage">                
        <Button isPrimary>Send Message</Button>
      </button>
      {submitText && <p css={tw`text-gray-700/70 ml-6`}>{submitText}</p>}
      </div>
    </form>
  )
}

