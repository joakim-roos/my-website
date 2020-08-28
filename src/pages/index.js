import React from "react"
import styled from 'styled-components'
import tw from 'twin.macro'

import Typewriter from 'typewriter-effect';

import Email from '../images/email.svg'
import Github from '../images/github.svg'

import Layout from "../components/layout"
import SEO from "../components/seo"


const Hero = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  min-width: 80%;
  margin: auto;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);

  & span {
    ${tw``}
    color: white;
    font-family: 'HK Grotesk';
    font-size: clamp(1.5rem, 2.5vw, 4rem);
  }
  & .Typewriter {
    ${tw`sm:text-center`}
  }

`;


const Contact = styled.div`
${tw`absolute w-full bottom-0 
    mb-8 flex justify-center`}

& {
  a {
  ${tw`flex items-center pt-5 
      px-1 sm:px-1 md:px-2`}
  }
  
  a img {
  max-width: clamp(70%, 3vw, 90%);
  }
} 
`;


const SVG = (props) => <img src={props.svg} alt={props.alt}></img>


const IndexPage = () => (
  <Layout>
    <SEO title="Hello" />
    <Hero>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.pauseFor(500)
            .typeString('Creative desveloper,')
            .pauseFor(300)
            .deleteChars(10)
            .pauseFor(10)
            .typeString('eveloper, designer & tinkerer from 1989')
            .pauseFor(1000)
            .typeString('.')
            .start();
        }} />
    </Hero>
    <Contact>
      <a
        href='https://github.com/joakim-roos'
        target="_blank"
        rel="noreferrer">
        <SVG svg={Github} alt={'github'} />
      </a>
      <a
        href='mailto:contact@joakim.pink'>
        <SVG svg={Email} alt={'email'} />
      </a>
    </Contact>
  </Layout >
)

export default IndexPage
